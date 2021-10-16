import Position from "../dataStructures/position/Position.js"
import Vector from "../dataStructures/vector/Vector.js"
import and from "./and.js"

//property checks

const durabilityLT1 = obj => obj?.durability < 1
export const hasCollided = obj => obj.hasCollidedWith.length > 0
export const hasCollidedWith = objectType => obj => obj.hasCollidedWith.filter(type => type === objectType).length > 0
const hasProperties = (...props: string[]) => obj => props.reduce((l, r) => l && r in obj, true)
export const isMoveable = hasProperties("velocity", "position")
export const hasDurability = hasProperties("durability")
export const isRotatable = hasProperties("rotation")
export const hasTTL = hasProperties("ttl")
export const hasAcceleration = hasProperties("acceleration")
export const hasClones = and(hasProperties("position"), obj => obj.position.length > 1)
export const isOutsideofPlay = obj => Vector.magnitude(Vector.subtract(
  Position.real(obj.position),
  Vector.CENTER_SCREEN
)) > 500
export const hasTimedOut = obj => obj.ttl < 1



//object type checks

export const isType = (...types: (ObjectType | ParticleType)[]) => obj => types.reduce((l, r) => l || obj.type === r, false)
export const isProjectile = isType(ObjectType.Projectile)
export const isPlayer = isType(ObjectType.Player)
export const isAsteroid = isType(ObjectType.Asteroid)
const isOwner = ownerType => obj => obj.owner === ownerType
const isOwnedByPlayer = isOwner(ObjectType.Player)
export const isPlayerProjectile = and(isProjectile, isOwnedByPlayer)
export const isAsteroidWithNoDurability = and(durabilityLT1, isAsteroid)
export const isRotatingCounterclockwise = object => object.angularVelocity < 0
export const isRotatingClockwise = object => object.angularVelocity > 0
export const isAccelerating = object => object.acceleration > 0
export const isOre = object => object.type === ObjectType.Ore
export const isCloneTrigger = isType(ObjectType.CloneTrigger)
export const isCargo = isType(ObjectType.Cargo)
export const isDrone = isType(ObjectType.Drone)
export const isDroneThatHasCollided = [
  isDrone,
  hasCollided,
  obj => obj.delete
].reduce(and)


//list property checks
export const hasPlayer = list => list.filter(isPlayer).length > 0
