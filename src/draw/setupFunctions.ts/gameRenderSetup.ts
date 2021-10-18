import { gameObjectRenderer, particleRenderer } from "../composedRenderingFunctions"
import drawText from "../graphics/text"
import fif from "../../hof/fif"
import text from "../graphics/text"
import Vector from "../../dataStructures/vector/Vector"

export const gameRenderSetup = (gameState) => {
  return fif<void, void, void>(gameState.paused,
    () => text(() => Vector.CENTER_SCREEN, () => 'PAUSED', { size: '2em' }),
    () => {
      gameObjectRenderer(gameState.objectList())
      particleRenderer(gameState.timer())(gameState.particleList())
      drawText(() => [Vector.CENTER_SCREEN[0], 20], () => `SCORE: ${gameState.score()}`)
      drawText(() => [Vector.CENTER_SCREEN[0], 40], () => `CARGO: ${gameState.ore()}`)
    })
}

