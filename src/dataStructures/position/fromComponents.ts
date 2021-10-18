import Vector from "../vector/Vector"
import addVector from "./addVector"

export default function fromComponents(offsets, x: number, y: number): TPosition {
  return addVector(offsets, Vector.fromComponents(x, y))
}