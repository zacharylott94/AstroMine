import add from "./add"
import distance from "./distance"
import distanceSquared from "./distanceSquared"
import dotProduct from "./dotProduct"
import magnitude from "./magnitude"
import normalize from "./normalize"
import squaredMagnitude from "./squaredMagnitude"
import subtract from "./subtract"
import radians from "./radians"
import degrees from "./degrees"
import scale from "./scale"
import fromDegreesAndMagnitude from "./fromDegreesAndMagnitude"

export default {

  fromComponents: (x, y): TVector => [x, y],
  new: (x, y): TVector => [x, y],
  fromDegreesAndMagnitude,
  add,
  subtract,

  scale,
  degrees,
  radians,
  normalize,
  magnitude,
  squaredMagnitude,
  distanceSquared,
  distance,
  dotProduct,

  UP: <TVector>[0, -1],
  DOWN: <TVector>[0, 1],
  LEFT: <TVector>[-1, 0],
  RIGHT: <TVector>[1, 0],
  ZERO: <TVector>[0, 0],
  INF: <TVector>[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  GAME_DIMENSIONS: <TVector>[500, 500],
  CENTER_SCREEN: <TVector>[250, 250]

}

