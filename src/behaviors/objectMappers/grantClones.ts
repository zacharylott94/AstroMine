import Position from "../../dataStructures/position/Position"

export default (obj: GameObject): GameObject => ({ ...obj, position: Position.fromVector(Position.real(obj.position)) })