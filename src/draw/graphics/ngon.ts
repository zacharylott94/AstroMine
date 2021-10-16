import Vector from "../../dataStructures/vector/Vector.js"
import { context } from "../../engine/canvas.js"
import { rotate } from "../library/rotate.js"


const ngon = sides => ([location, object]) => {
  const divisionSize = (Math.PI * 2) / sides
  const divisions: number[] = new Array<number>(sides).fill(1).map(
    (_num, index) => (index + 1) * divisionSize
  )
  const points = divisions.map(
    division => <TVector>[Math.cos(division), Math.sin(division)]
  )
  const scaledPoints = points.map(point => Vector.scale(point, object.radius))
  const translatedPoints = scaledPoints.map(point => Vector.add(point, location))
  context.beginPath()
  rotate(location, object.rotation)
  context.moveTo(...translatedPoints[0])
  translatedPoints.forEach(point => context.lineTo(...point))
  context.lineTo(...translatedPoints[0])
  context.stroke()
}

export default ngon