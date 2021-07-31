import constrain from "./constrain.js"
import Vector from "../vector/Vector.js"
import closestTo from "./closestTo.js"
import specificPositionVector from "./specificPositionVector.js"
import addVector from "./addVector.js"
import fromComponents from "./fromComponents.js"
import { partial } from "../../hof/partial.js"
import { GameDimensions } from "../../GameDimensions.js"


enum EPosition {
  topLeft,
  top,
  topRight,
  left,
  real,
  right,
  bottomLeft,
  bottom,
  bottomRight,
}

const offsets: TPosition = [
  Vector.fromComponents(-GameDimensions[0], -GameDimensions[1]),
  Vector.fromComponents(0, -GameDimensions[1]),
  Vector.fromComponents(GameDimensions[0], -GameDimensions[1]),
  Vector.fromComponents(-GameDimensions[0], 0),
  Vector.fromComponents(0, 0),
  Vector.fromComponents(GameDimensions[0], 0),
  Vector.fromComponents(-GameDimensions[0], GameDimensions[1]),
  Vector.fromComponents(0, GameDimensions[1]),
  Vector.fromComponents(GameDimensions[0], GameDimensions[1]),

]
export default {
  fromVector: partial(addVector, offsets),
  fromComponents: (x, y) => fromComponents(offsets, x, y),
  addVector,
  real: specificPositionVector(EPosition.real),
  closestTo,
  constrain: constrain(offsets, EPosition.real),
}
