import compose from "../hof/compose.js"
import { extractPosition } from "../hof/extract.js"
import { canvasContextScope } from "./canvasContextScope.js"
import text from "./text.js"



export const drawX = compose(extractPosition, canvasContextScope((location) => {
  text(() => location, () => "X")
}))
