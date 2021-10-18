import Vector from "../vector/Vector"

type Distance = number
type Index = number
export default (position: TPosition, point: TVector) => {
  const distancesFromPoint = position.map(vector => Vector.distanceSquared(vector, point))
  const shortestDistanceIndex = distancesFromPoint.reduce((tuple: [Distance, Index], distance, index): [Distance, Index] => {
    if (distance < tuple[0]) return [distance, index]
    return tuple
  }, [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER])[1]
  return position[shortestDistanceIndex]
}