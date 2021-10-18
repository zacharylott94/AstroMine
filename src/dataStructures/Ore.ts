import { isDrone, isPlayer } from "../hof/conditions"
import or from "../hof/or"
import { randomChoice, randomInteger } from "../libraries/random"
import GenericFactory from "./genericObject"
const radius = 3

const Ore = (location, velocity, rotation = 0, angularVelocity = 0): Ore => ({
  ...GenericFactory(location, velocity, radius, ObjectType.Ore),
  hasCollidedWith: [],
  isCollidableWith: or(isPlayer, isDrone),
  rotation,
  angularVelocity,
  ttl: 60 * 20,
})

export const randomRotationOre = (location, velocity) => Ore(location, velocity, randomInteger(360), randomChoice(-2, 2))
