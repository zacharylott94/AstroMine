import Position from "../../dataStructures/position/Position.js"

export default function <T>(obj: T & IMoveable): T & IMoveable {
  return { ...obj, position: Position.constrain(obj.position) }
}