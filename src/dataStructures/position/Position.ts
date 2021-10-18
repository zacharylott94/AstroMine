import constrain from "./constrain"
import Vector from "../vector/Vector"
import closestTo from "./closestTo"
import specificPositionVector from "./specificPositionVector"
import addVector from "./addVector"
import fromComponents from "./fromComponents"
import { partial } from "../../hof/partial"


enum EPosition {
  real,
  topLeft,
  top,
  topRight,
  left,
  right,
  bottomLeft,
  bottom,
  bottomRight,
}

const offsets: TPosition = [
  Vector.fromComponents(0, 0),
  Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], -Vector.GAME_DIMENSIONS[1]),
  Vector.fromComponents(0, -Vector.GAME_DIMENSIONS[1]),
  Vector.fromComponents(Vector.GAME_DIMENSIONS[0], -Vector.GAME_DIMENSIONS[1]),
  Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], 0),
  Vector.fromComponents(Vector.GAME_DIMENSIONS[0], 0),
  Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], Vector.GAME_DIMENSIONS[1]),
  Vector.fromComponents(0, Vector.GAME_DIMENSIONS[1]),
  Vector.fromComponents(Vector.GAME_DIMENSIONS[0], Vector.GAME_DIMENSIONS[1]),

]
export default {
  fromVector: partial(addVector, offsets),
  fromComponents: (x, y) => fromComponents(offsets, x, y),
  addVector,
  real: specificPositionVector(EPosition.real),
  closestTo,
  constrain: constrain(offsets, EPosition.real),
}
