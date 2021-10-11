import Vector from "../../dataStructures/vector/Vector.js"
import compose from "../../hof/compose.js"
import passthrough from "../../hof/passthrough.js"
import { particleRenderer } from "../composedRenderingFunctions.js"
import text from "../text.js"
import popupLine from "./popupLine.js"

const popupText = text2 => location => {
  text(() => Vector.add(location, [10, -21]), () => text2)
}


export default [
  particleRenderer(popupText("TEST")),
  popupLine

].reduce(compose)