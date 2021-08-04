import { fireProjectileWhenReady } from "../behaviors/listMappers/fireProjectile.js"
import { setupRotationFunctions } from "../behaviors/objectMappers/rotate.js"
import { resetGameState } from "./global.js"
import { conditional } from "../hof/conditional.js"
import mapper from "../hof/mapper.js"
import motor from "../hof/motor.js"
import { isPlayer } from "../hof/conditions.js"
import { dropCargo } from "../behaviors/listMappers/dropCargo.js"

const applyAcceleration = (player: Player) => ({ ...player, acceleration: .02 })
const playerRotationSpeed = 4

export function setupInterface(gameState) {
  const [clockwise, counterClockwise] = setupRotationFunctions(playerRotationSpeed)
  const humanInterface: HumanInterface = {
    fire: motor(gameState.objectList, fireProjectileWhenReady),
    rotateClockwise: motor(gameState.objectList, clockwise),
    rotateCounterclockwise: motor(gameState.objectList, counterClockwise),
    accelerate: motor(gameState.objectList, mapper(conditional(isPlayer, applyAcceleration))),
    reset: () => resetGameState(gameState),
    pause: motor(gameState.paused, paused => !paused),
    jettison: motor(gameState.objectList, dropCargo(gameState.ore))
  }
  return humanInterface
}