import compose from "../../hof/compose"
import { extractPosition } from "../../hof/extract"
import passthrough from "../../hof/passthrough"
import { canvasContextScope } from "./canvasContextScope"

export default drawFunction => passthrough(compose(extractPosition, canvasContextScope(drawFunction)))