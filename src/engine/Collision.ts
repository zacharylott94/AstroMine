import Position from "../dataStructures/position/Position"
import Vector from "../dataStructures/vector/Vector"
import mapper from "../hof/mapper"
import reduceMap from "../hof/reduceMap"

export function checkCollision(object: ICollidable & ITypeable, otherObject: ICollidable & ITypeable): ICollidable & ITypeable {
  if (object === otherObject) return object
  const realPosition = Position.real(object.position)
  let closestPosition
  if (object.position.length === otherObject.position.length)
    closestPosition = Position.closestTo(otherObject.position, realPosition)
  else
    closestPosition = Position.real(otherObject.position)
  const squaredDistanceBetweenObjects = Vector.distanceSquared(realPosition, closestPosition)
  const summedRadiiOfObjects = object.radius + otherObject.radius
  const squaredRadiiOfObjects = summedRadiiOfObjects * summedRadiiOfObjects
  if (squaredDistanceBetweenObjects <= squaredRadiiOfObjects) return { ...object, hasCollidedWith: [...object.hasCollidedWith, otherObject.type] }
  return object
}

const checkCollisionAgainstMask = (obj1, obj2) => {
  if (obj1.isCollidableWith(obj2)) return checkCollision(obj1, obj2)
  return obj1
}
const resetObject = <T>(obj: T & ICollidable): T & ICollidable => ({ ...obj, hasCollidedWith: [] })
const resetCollision = mapper(resetObject)

export default {
  reset: resetCollision,
  checkAgainstMask: reduceMap(checkCollisionAgainstMask),
}