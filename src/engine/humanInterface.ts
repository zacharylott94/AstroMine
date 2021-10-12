import { fireProjectileWhenReady } from "../behaviors/listMappers/fireProjectile.js"
import { setupRotationFunctions } from "../behaviors/objectMappers/rotate.js"
import { resetGameState } from "./global.js"
import { conditional } from "../hof/conditional.js"
import mapper from "../hof/mapper.js"
import motor from "../hof/motor.js"
import { isPlayer } from "../hof/conditions.js"
import { dropCargo } from "../behaviors/listMappers/dropCargo.js"
import { PLAYER_ROTATION_SPEED, playerThrust } from "../dataStructures/Player.js"

export function setupInterface(gameState) {
  const [clockwise, counterClockwise] = setupRotationFunctions(PLAYER_ROTATION_SPEED)
  const humanInterface: HumanInterface = {
    fire: motor(gameState.objectList, fireProjectileWhenReady),
    rotateClockwise: motor(gameState.objectList, clockwise),
    rotateCounterclockwise: motor(gameState.objectList, counterClockwise),
    accelerate: motor(gameState.objectList, mapper(conditional(isPlayer, playerThrust))),
    reset: () => resetGameState(gameState),
    pause: motor(gameState.paused, paused => !paused),
    jettison: motor(gameState.objectList, dropCargo(gameState.ore))
  }
  return humanInterface
}