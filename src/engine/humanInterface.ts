import { fireProjectileWhenReady } from "../behaviors/listMappers/fireProjectile"
import { setupRotationFunctions } from "../behaviors/objectMappers/rotate"
import { resetGameState } from "./global"
import { conditional } from "../hof/conditional"
import mapper from "../hof/mapper"
import motor from "../hof/motor"
import { isPlayer } from "../hof/conditions"
import { dropCargo } from "../behaviors/listMappers/dropCargo"
import { PLAYER_ROTATION_SPEED, playerThrust } from "../dataStructures/Player"

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