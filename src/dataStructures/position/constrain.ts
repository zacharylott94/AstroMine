import Vector from "../vector/Vector"
import wrapVector from "../vector/wrapVector"
import addVector from "./addVector"
import specificPositionVector from "./specificPositionVector"


export default (offsets, realPositionIndex) => (position: TPosition): TPosition => {
  const realPosition = specificPositionVector(realPositionIndex)(position)
  let resultVector: TVector = wrapVector(Vector.GAME_DIMENSIONS, realPosition)
  return addVector(offsets, resultVector)
}

