import { randomChoice } from "../libraries/random"

const sfxPrefix = "/asteroids/src/sfx/"

const shootList = [
  "shoot.wav",
  "shoot2.wav",
  "shoot3.wav"
]
const asteroidHitList = [
  "asteroid_hit.wav",
  "asteroid_hit2.wav",
  "asteroid_hit3.wav",
]

const asteroidShatterList = [
  "asteroid_shatter.wav",
  "asteroid_shatter2.wav",
  "asteroid_shatter3.wav",
]

const playSound = soundURI => (arg?) => {
  new Audio(sfxPrefix + soundURI).play()
  return arg
}

const playRandomSound = soundURIList => arg => {
  new Audio(sfxPrefix + randomChoice(...soundURIList)).play()
  return arg
}

const soundWrapper = soundURI => func => (...args) => {
  playSound(soundURI)()
  return func(...args)
}

const createPlayPauseFunctions = soundURI => {
  const sound = new Audio(sfxPrefix + soundURI)
  sound.loop = true
  return {
    play: () => sound.play(),
    pause: () => sound.pause()
  }
}


export const playerShootSound = playRandomSound(shootList)
export const asteroidHitSound = playRandomSound(asteroidHitList)
export const asteroidShatterSound = playRandomSound(asteroidShatterList)
export const playerDeathSound = playSound("player_kill.wav")
export const pauseSound = playSound("pause.wav")
export const droneSpawnSoundWrapper = soundWrapper("drone_spawn.wav")
export const orePickupSound = playSound("ore_pickup.wav")
export const jettisonSound = playSound("jettison.wav")
export const cargoPickupSound = playSound("drone_pickup.wav")
export const thrustSoundFunctions = createPlayPauseFunctions("thrust.wav")
export const resetSound = playSound("restart.wav")