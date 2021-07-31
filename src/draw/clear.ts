import { context } from "../engine/canvas.js"
import { GameDimensions } from "../GameDimensions.js"

export const clear = () => {
  context.fillRect(-10, -10, GameDimensions[0] + 15, GameDimensions[1] + 15)
}