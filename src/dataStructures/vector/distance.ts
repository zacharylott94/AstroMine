import distanceSquared from "./distanceSquared"

export default (vector1: TVector, vector2: TVector): number => {
  return Math.sqrt(distanceSquared(vector1, vector2))
}