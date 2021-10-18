import { context } from "../../engine/canvas"
import { canvasContextScope } from "../library/canvasContextScope"

const drawText = (locationFunction, textFunction, { color = "rgb(0,255,0)", size = '1em' } = {}) => {
  context.textAlign = "center"
  context.textBaseline = "top"
  context.font = `${size} sans-serif`
  context.fillStyle = color
  let [x, y] = locationFunction()
  context.fillText(textFunction(), x, y)
}

export default canvasContextScope(drawText)
