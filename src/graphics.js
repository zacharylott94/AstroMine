import Circle from "./objects/Circle.js"
import Player from "./objects/Player.js"
import Canvas from "./objects/Canvas.js"
import Vector from "./objects/Vector.js"

const render = (object) => {
    //Assumption: All objects' draw functions will take or ignore these specific parameters
    //            So, all object draw functions should take a context, then have their position passed in, etc.
    //            If a draw function ever doesn't follow this, rendering will break
    object.draw(object.position,object.radius)

    showCenter(object)
    object.collided > 0? showCollision(object.position): false
    showVelocity(object)

    //The above assumption exists in this function as well
    showClones(object)
}


//clears the context
const clear = () => { 
    let ctx = Canvas.context
    ctx.fillRect(-10, -10, Canvas.width+15, Canvas.height+15)
}


const showCenter = (object) => {
    drawCross(object.position, object.radius*2, "rgb(255,0,0)")
}

const showVelocity = (object) => {
    drawRay(object.position, Vector.add(object.position, Vector.multiply(object.velocity,50)))
}
const showCollision = (position) => {
    drawCross(position, 10, "white")
}
const drawCross = (position, size, color) => {
    let ctx = Canvas.context
    ctx.save()
    ctx.fillStyle = color
    ctx.fillRect(position.x-size/2,position.y,size,1)
    ctx.fillRect(position.x,position.y-size/2,1,size)
    ctx.restore()
}

const drawRay = (start, end) => {
    let ctx = Canvas.context
    ctx.save()
    ctx.strokeStyle = "rgb(255,255,0)"
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.restore()
}

//This draws screen-wrap clones for a seamless appearance
const showClones = (object) => {

    const x = object.position.x
    const y = object.position.y
    object.draw(Vector.create(x + Canvas.width, y), object.radius)               //right clone
    object.draw(Vector.create(x, y + Canvas.height), object.radius)              //bottom clone
    object.draw(Vector.create(x - Canvas.width, y), object.radius)               //left clone
    object.draw(Vector.create(x, y - Canvas.height), object.radius)              //top clone
    object.draw(Vector.create(x + Canvas.width, y + Canvas.height), object.radius)  //bottom-right clone
    object.draw(Vector.create(x - Canvas.width, y + Canvas.height), object.radius)  //bottom-left clone
    object.draw(Vector.create(x + Canvas.width, y - Canvas.height), object.radius)  //top-right clone
    object.draw(Vector.create(x - Canvas.width, y - Canvas.height), object.radius)  //top-left clone
}

const GRAPHICS = {
  Circle,
  Player,
  clear,
  render,
  showCollision
}



export default GRAPHICS