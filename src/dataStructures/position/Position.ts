import constrain from "./constrain.js"
import Vector from "../vector/Vector.js"
import closestTo from "./closestTo.js"
import specificPositionVector from "./specificPositionVector.js"
import addVector from "./addVector.js"
import fromComponents from "./fromComponents.js"
import { partial } from "../../hof/partial.js"


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
