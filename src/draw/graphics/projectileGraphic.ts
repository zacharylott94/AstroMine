import { context } from "../../engine/canvas"
import { rotate } from "../library/rotate"

//Draws a diamond for the projectile
const projectileGraphic: RenderFunction<IRotatableRenderable> = ([location, object]) => {
  const length = 4
  const width = 2
  const [x, y] = location
  rotate(location, object.rotation)
  context.beginPath()
  context.moveTo(x, y + width)
  context.lineTo(x - length, y)
  context.lineTo(x, y - width)
  context.lineTo(x + length, y)
  context.lineTo(x, y + width)
  context.stroke()
}

export default projectileGraphic
