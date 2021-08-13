import Vector from "../vector/Vector.js"

export default function addVector(position: TPosition, vector: TVector): TPosition {
  const newPosition: TPosition = [
    ...position
  ]
  return newPosition.map(each => Vector.add(each, vector))
}