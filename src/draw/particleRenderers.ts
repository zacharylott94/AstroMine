import { unitCircle } from "./graphics/circle"
import particleRenderer from "./library/particleRenderer"
import text from "./graphics/text"

export const dotParticleRenderer = particleRenderer(unitCircle)
export const XParticleRenderer = particleRenderer((location) => {
  text(() => location, () => "X")
})
