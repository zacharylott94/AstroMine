import { fireProjectileWhenReady } from "../behaviors/listMappers/fireProjectile"
import { setupRotationFunctions } from "../behaviors/objectMappers/rotate"
import { resetGameState } from "./global"
import { conditional } from "../hof/conditional"
import mapper from "../hof/mapper"
import motor from "../hof/motor"
import { isPlayer } from "../hof/conditions"
import { dropCargo } from "../behaviors/listMappers/dropCargo"
import { PLAYER_ROTATION_SPEED, playerThrust } from "../dataStructures/Player"
import compose from "../hof/compose"
import { pauseSound, resetSound, thrustSoundFunctions } from "./sound"


const soundWrapper = func => player => {
  thrustSoundFunctions.play()
  return func(player)
}
const thrustWithSound = soundWrapper(playerThrust)


export function setupInterface(gameState) {
  const [clockwise, counterClockwise] = setupRotationFunctions(PLAYER_ROTATION_SPEED)
  const clockwiseWithSound = soundWrapper(clockwise)
  const counterClockwiseWithSound = soundWrapper(counterClockwise)
  const humanInterface: HumanInterface = {
    fire: motor(gameState.objectList, fireProjectileWhenReady),
    rotateClockwise: motor(gameState.objectList, clockwiseWithSound),
    rotateCounterclockwise: motor(gameState.objectList, counterClockwiseWithSound),
    accelerate: motor(gameState.objectList, mapper(conditional(isPlayer, thrustWithSound))),
    reset: () => { resetGameState(gameState); resetSound() },
    pause: motor(gameState.paused, compose(pauseSound, paused => !paused)),
    jettison: motor(gameState.objectList, dropCargo(gameState.ore))
  }
  return humanInterface
}