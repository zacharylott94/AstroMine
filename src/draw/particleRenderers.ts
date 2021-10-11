import { unitCircle } from "./graphics/circle.js"
import particleRenderer from "./library/particleRenderer.js"
import text from "./graphics/text.js"

export const dotParticleRenderer = particleRenderer(unitCircle)
export const XParticleRenderer = particleRenderer((location) => {
  text(() => location, () => "X")
})
