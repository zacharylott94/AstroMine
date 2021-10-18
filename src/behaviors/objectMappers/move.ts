import Position from "../../dataStructures/position/Position"

export default function <T>(obj: T & IMoveable): T & IMoveable {
  return { ...obj, position: Position.addVector(obj.position, obj.velocity) }
}