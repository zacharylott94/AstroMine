import normalize from "./normalize"
const [x, y] = [0, 1]
export default (vector: TVector): number => {
  return Math.atan2(normalize(vector)[y], normalize(vector)[x])
}