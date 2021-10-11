import particleRenderer from "./library/particleRenderer.js"
import text from "./text.js"

export default particleRenderer((location) => {
  text(() => location, () => "X")
})
