import squaredMagnitude from "./squaredMagnitude"

export default (vector: TVector): number => {
  return Math.sqrt(squaredMagnitude(vector))
}