import { GameDimensions } from "../../GameDimensions.js"
import wrapVector from "../vector/wrapVector.js"
import addVector from "./addVector.js"
import specificPositionVector from "./specificPositionVector.js"


export default (offsets, realPositionIndex) => (position: TPosition): TPosition => {
  const realPosition = specificPositionVector(realPositionIndex)(position)
  let resultVector: TVector = wrapVector(GameDimensions, realPosition)
  return addVector(offsets, resultVector)
}

