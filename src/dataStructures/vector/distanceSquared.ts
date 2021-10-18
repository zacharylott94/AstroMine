import subtract from "./subtract"
import squaredMagnitude from "./squaredMagnitude"

export default (vector1: TVector, vector2: TVector): number => {
  return squaredMagnitude(subtract(vector1, vector2))
}