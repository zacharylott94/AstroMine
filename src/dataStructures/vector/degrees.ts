import mod from "../../libraries/mod"
import radians from "./radians"

export default (vector: TVector): Degrees => {
  const rad: number = radians(vector)
  return mod(rad * 360 / 2 / Math.PI, 360)
}