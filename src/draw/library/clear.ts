import Vector from "../../dataStructures/vector/Vector"
import { context } from "../../engine/canvas"

export const clear = () => {
  const [width, height] = Vector.GAME_DIMENSIONS
  context.fillRect(-10, -10, width + 15, height + 15)
}