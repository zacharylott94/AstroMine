import { isAsteroid, isDrone, isOre } from "../hof/conditions"
import or from "../hof/or"
import GenericFactory from "./genericObject"
import Vector from "./vector/Vector"

const PLAYER_RADIUS = 6
const THRUST = .02
export const PLAYER_ROTATION_SPEED = 4

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
export const playerThrust = (player: Player) => ({ ...player, acceleration: THRUST })


export default player