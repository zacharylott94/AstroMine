import { nullParticle, Particle as particleSetup } from "../dataStructures/Particle"
import Position from "../dataStructures/position/Position"
import Vector from "../dataStructures/vector/Vector"
import compose from "../hof/compose"
import { randomAngle, randomInteger, randomNumber } from "../libraries/random"
import { hasCollided, isAccelerating, isDroneThatHasCollided, isPlayer, isProjectile, isRotatingClockwise, isRotatingCounterclockwise } from "../hof/conditions"
import and from "../hof/and"
import array from "../libraries/array"
import mod from "../libraries/mod"
import { wavy, zeroAcceleration } from "./accelerationFunctions"

type ParticleGeneratorSettings = {
  number: number,
  spread: Degrees,
  location: TVector,
  angle: Degrees,
  lifetime: number,
  speed: number,
  timer: Function,
  acceleration: () => (time) => TVector,
  type: ParticleType
}

const concat = array.concat
const Particle = particleSetup(Vector.GAME_DIMENSIONS)

const generateParticleList = (generatorSettings: ParticleGeneratorSettings) => {
  let particles = new Array<Particle>(generatorSettings.number).fill(nullParticle)
  let randomVelocity = () => Vector.fromDegreesAndMagnitude(randomAngle(generatorSettings.angle, generatorSettings.spread), generatorSettings.speed)
  particles = particles.map(_ => Particle(generatorSettings.timer(), generatorSettings.location, randomVelocity(), generatorSettings.lifetime, generatorSettings.acceleration(), generatorSettings.type))
  return particles
}

const boosterSettings = (player, offset, timer) => ({
  get location() {
    return [
      Position.real(player.position),
      Vector.fromDegreesAndMagnitude(player.rotation, -5),
      Vector.fromDegreesAndMagnitude(player.rotation + 90, offset)
    ].reduce(Vector.add)
  },
  get speed() { return Vector.magnitude(player.velocity) * 1.5 },
  get angle() { return player.rotation + 180 },
  spread: 0,
  get number() { return randomInteger(1, 0) },
  get lifetime() { return randomInteger(15, 5) },
  timer,
  acceleration: wavy({ yAxis: player.rotation + 90 }),
  type: ParticleType.Dot
})

const playerLeftBooster = timer => player => generateParticleList(boosterSettings(player, -5, timer))

const playerRightBooster = timer => player => generateParticleList(boosterSettings(player, 5, timer))

const playerBoosters = timer => player => [
  playerRightBooster(timer)(player),
  playerLeftBooster(timer)(player)
].flat()

const projectileTrailGenerator = timer => (projectile) => {
  const perpendicular = projectile.rotation + 90
  return generateParticleList({
    get location() { return Position.real(projectile.position) },
    get speed() { return Vector.magnitude(projectile.velocity) * .2 * randomNumber(1) },
    get angle() { return projectile.rotation + 180 },
    spread: 15,
    get number() { return randomInteger(1, 0) },
    get lifetime() { return randomInteger(45, 15) },
    timer,
    acceleration: wavy({ yAxis: perpendicular }),
    type: ParticleType.Dot
  })

}

const projectileImpactGenerator = timer => (projectile) => generateParticleList({
  get location() { return Position.real(projectile.position) },
  get speed() { return randomNumber(1) },
  get angle() { return projectile.rotation + 180 },
  spread: 110,
  get number() { return randomInteger(60, 30) },
  get lifetime() { return randomInteger(60) },
  timer,
  acceleration: () => time => Vector.fromDegreesAndMagnitude(mod(time * 20, 360) + randomAngle(0, 360), 10 / (time * time)),
  type: ParticleType.Dot
})

const destroyParticleGenerator = timer => object => {
  return generateParticleList({
    get location() { return Position.real(object.position) },
    get speed() { return randomNumber(3, 1) },
    angle: 0,
    spread: 360,
    get number() { return object.radius * 2 },
    get lifetime() { return randomInteger(120, 60) },
    timer,
    acceleration: zeroAcceleration,
    type: ParticleType.Dot
  })
}

const projectileTimeoutParticleGenerator = timer => projectile => generateParticleList({
  get location() { return Position.real(projectile.position) },
  get speed() { return Vector.magnitude(projectile.velocity) * .15 * randomNumber(1) },
  get angle() { return projectile.rotation },
  spread: 60,
  get number() { return randomInteger(10, 5) },
  get lifetime() { return randomInteger(100) },
  timer,
  acceleration: () => time => Vector.fromDegreesAndMagnitude(mod(time * 10, 360) + randomAngle(0, 360), 5 / (time * time)),
  type: ParticleType.Dot
})

const playerDeathParticleGenerator = timer => player => generateParticleList({
  get location() { return Position.real(player.position) },
  get speed() { return randomNumber(.5, .15) },
  angle: 0,
  spread: 360,
  get number() { return randomInteger(40, 30) },
  get lifetime() { return randomInteger(520, 400) },
  timer,
  acceleration: zeroAcceleration,
  type: ParticleType.Dot
})

const particleMap = (method, filter) => (objectListGetter, timerGetter) => list => {
  const particles = objectListGetter()
    .filter(filter)
    .map(method(timerGetter))
    .reduce(concat, [])
  return concat(list, particles)
}

const droneDestructionParticleGenerator = timer => object => {
  return generateParticleList({
    get location() { return Position.real(object.position) },
    get speed() { return randomNumber(.5) },
    angle: 0,
    spread: 360,
    number: 10,
    get lifetime() { return randomInteger(360, 180) },
    timer,
    acceleration: zeroAcceleration,
    type: ParticleType.Dot
  })
}
const droneXParticleGenerator = timer => object => {
  return generateParticleList({
    get location() { return Position.real(object.position) },
    speed: 0,
    angle: 0,
    spread: 0,
    number: 1,
    lifetime: 60 * 10,
    timer,
    acceleration: zeroAcceleration,
    type: ParticleType.X
  })
}


const DestroyParticles = particleMap(destroyParticleGenerator, obj => obj.type === ObjectType.Asteroid && obj.delete)
const ProjectileTrails = particleMap(projectileTrailGenerator, isProjectile)
const ProjectileImpacts = particleMap(projectileImpactGenerator, and(isProjectile, hasCollided))
const PlayerParticles = particleMap(playerBoosters, and(isPlayer, isAccelerating))
const ProjectileTimeoutParticles = particleMap(projectileTimeoutParticleGenerator, obj => isProjectile(obj) && obj.hasCollidedWith.length < 1 && obj.delete)
const PlayerDeathParticles = particleMap(playerDeathParticleGenerator, and(isPlayer, (obj: any) => obj.delete))
const PlayerCounterclockwiseBooster = particleMap(playerRightBooster, and(isPlayer, isRotatingCounterclockwise))
const PlayerClockwiseBooster = particleMap(playerLeftBooster, and(isPlayer, isRotatingClockwise))
const droneDestructionParticles = particleMap(droneDestructionParticleGenerator, isDroneThatHasCollided)
const droneXParticle = particleMap(droneXParticleGenerator, isDroneThatHasCollided)
export const particleGeneratorSetup = (objectListGetter, timerGetter) => {
  return [
    DestroyParticles,
    ProjectileTrails,
    ProjectileImpacts,
    PlayerParticles,
    ProjectileTimeoutParticles,
    PlayerDeathParticles,
    PlayerClockwiseBooster,
    PlayerCounterclockwiseBooster,
    droneDestructionParticles,
    droneXParticle,
  ].map(f => f(objectListGetter, timerGetter))
    .reduce(compose)
}

