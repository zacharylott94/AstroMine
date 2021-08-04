import { isAsteroid, isDrone, isOre } from "../hof/conditions.js"
import or from "../hof/or.js"
import GenericFactory from "./genericObject.js"
import Vector from "./vector/Vector.js"

const PLAYER_RADIUS = 6
const isCollidableWith = [
  isAsteroid,
  isOre,
  isDrone,
].reduce(or)
const player = (): Player => {
  return {
    ...GenericFactory(Vector.CENTER_SCREEN, [0, 0], PLAYER_RADIUS, ObjectType.Player),
    rotation: 0,
    acceleration: 0,
    hasCollidedWith: [],
    isCollidableWith,
    angularVelocity: 0,
  }
}

export default player