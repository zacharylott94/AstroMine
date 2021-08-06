import Position from "../dataStructures/position/Position.js"
import Vector from "../dataStructures/vector/Vector.js"
import and from "./and.js"
import or from "./or.js"



//property checks

export const durabilityLT1 = obj => obj?.durability < 1
export const hasCollided = obj => obj.hasCollidedWith.length > 0
export const hasCollidedMultiple = obj => obj.hasCollidedWith.length > 1
export const hasCollidedWith = objectType => obj => obj.hasCollidedWith.filter(type => type === objectType).length > 0
export const hasProperties = (...props: string[]) => obj => props.reduce((l, r) => l && r in obj, true)
export const isCollidable = hasProperties("hasCollidedWith", "radius")
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

export const isObject = (...types: ObjectType[]) => obj => types.reduce((l, r) => l || obj.type === r, false)
export const isProjectile = isObject(ObjectType.Projectile)
export const isPlayer = isObject(ObjectType.Player)
export const isAsteroid = isObject(ObjectType.Asteroid)
export const isOwner = ownerType => obj => obj.owner === ownerType
export const isOwnedByPlayer = isOwner(ObjectType.Player)
export const isPlayerProjectile = and(isProjectile, isOwnedByPlayer)
export const isAsteroidWithNoDurability = and(durabilityLT1, isAsteroid)
export const isRotatingCounterclockwise = object => object.angularVelocity < 0
export const isRotatingClockwise = object => object.angularVelocity > 0
export const isAccelerating = object => object.acceleration > 0
export const isOre = object => object.type === ObjectType.Ore
export const isOrePlayerOrProjectile = [isPlayer, isProjectile, isOre].reduce(or)
export const isCloneTrigger = isObject(ObjectType.CloneTrigger)
export const isCargo = isObject(ObjectType.Cargo)
export const isDrone = isObject(ObjectType.Drone)


//list property checks
export const hasPlayer = list => list.filter(isPlayer).length > 0
