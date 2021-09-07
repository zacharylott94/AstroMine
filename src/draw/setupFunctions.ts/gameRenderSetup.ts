import { gameObjectRenderer, particleRenderer } from "../composedRenderingFunctions.js"
import drawText from "../text.js"
import fif from "../../hof/fif.js"
import text from "../text.js"
import Vector from "../../dataStructures/vector/Vector.js"

export const gameRenderSetup = (gameState) => {
  return fif(gameState.paused,
    () => text(() => Vector.CENTER_SCREEN, () => 'PAUSED', { size: '2em' }),
    () => {
      gameObjectRenderer(gameState.objectList())
      particleRenderer(gameState.timer())(gameState.particleList())
      drawText(() => [Vector.CENTER_SCREEN[0], 20], () => `SCORE: ${gameState.score()}`)
      drawText(() => [Vector.CENTER_SCREEN[0], 40], () => `CARGO: ${gameState.ore()}`)
    })
}

