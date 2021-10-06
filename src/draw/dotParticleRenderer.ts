import { unitCircle } from "./circle.js"
import { canvasContextScope } from "./canvasContextScope.js"
import compose from "../hof/compose.js"
import { extractPosition } from "../hof/extract.js"


export const dotParticleRenderer = compose(extractPosition, canvasContextScope(unitCircle))
