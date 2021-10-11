import compose from "../../hof/compose.js"
import { extractPosition } from "../../hof/extract.js"
import passthrough from "../../hof/passthrough.js"
import { canvasContextScope } from "../canvasContextScope.js"

export default drawFunction => passthrough(compose(extractPosition, canvasContextScope(drawFunction)))