import { isPlayer } from "../hof/conditions.js"
import { randomChoice, randomInteger } from "../libraries/random.js"
import GenericFactory from "./genericObject.js"
const radius = 3

const Ore = (location, velocity, rotation = 0, angularVelocity = 0): Ore => ({
  ...GenericFactory(location, velocity, radius, ObjectType.Ore),
  hasCollidedWith: [],
  isCollidableWith: isPlayer,
  rotation,
  angularVelocity,
})

export const randomRotationOre = (location, velocity) => Ore(location, velocity, randomInteger(360), randomChoice(-2, 2))

export default Ore