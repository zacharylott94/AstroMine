import move from "./behaviors/move.js"
import circle from "./draw/circle.js"
import Graphics from "./engine/graphics.js"
import Position from "./dataStructures/Position.js"
import Vector from "./dataStructures/Vector.js"
import { isMoveable } from "./types/typeGuards.js"
import playerShipGraphic from "./draw/playerShipGraphic.js"
import projectileGraphic from "./draw/projectileGraphic.js"

function objectFactory(p = Vector.fromComponents(Math.random()*500, Math.random()*500),
                       v = Vector.fromComponents(Math.random()*3,Math.random()*3),
                       r = Math.random() * 30) {
  let object = {
    position: Position.fromVector(p),
    velocity: v,
    renderAt: circle,
    radius: r
  }
  return object
}
let objectList: any[] = new Array(10).fill("").map(_ => objectFactory())
objectList[0] = {
  position: Position.fromVector(Vector.ZERO),
  velocity: Vector.fromComponents(2,2),
  rotation: 45,
  renderAt: playerShipGraphic,
}
objectList[1] = {
  position: Position.fromComponents(50,50),
  velocity: Vector.fromDegreesAndMagnitude(30,2),
  rotation: 30,
  renderAt: projectileGraphic,
}

let graphicsLoop = () => {
  Graphics.clear()

  //test stuff below
  objectList.forEach(object => Graphics.renderObject(object))
}

let physicsLoop = () => {
  objectList = objectList.map(object => {
    if(isMoveable(object)) return move(object)
    return object
  })
}

setInterval(graphicsLoop, 1000/60)
setInterval(physicsLoop, 1000/60)