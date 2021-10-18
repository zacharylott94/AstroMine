import { context } from "../../engine/canvas"
import { rotate } from "../library/rotate"

const playerShipGraphic: RenderFunction<IRotatableRenderable> = ([location, object]) => {
    const [x, y] = location
    rotate(location, object.rotation)
    context.beginPath()
    context.moveTo(x - 4, y + 7)
    context.lineTo(x - 4, y - 7)
    context.lineTo(x + 10, y)
    context.lineTo(x - 4, y + 7)
    context.stroke()
}

export default playerShipGraphic

