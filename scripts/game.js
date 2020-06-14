import GameObject from "./objects/GameObject.js"
import constrain from "./gameLogic/constrain.js"
import Vector from "./objects/Vector.js"
import GRAPHICS from "./graphics.js"

//---------------Initialize Game--------------------

const canvas = document.getElementById("canvas")


// Radius Constants
const largeRadius = 40
const mediumRadius = 25
const smallRadius = 16
const playerRadius = 6



//stock images
// const largeAsteroidImage  = GRAPHICS.Circle(largeRadius)
// const mediumAsteroidImage = GRAPHICS.Circle(mediumRadius)
// const smallAsteroidImage  = GRAPHICS.Circle(smallRadius)
const playerImage    = GRAPHICS.Player()

//array of objects
let objects = []
objects.push(GameObject.create(Vector.create(10,  150), Vector.createDM(45,   1), GRAPHICS.Circle.stroke,  largeRadius))
objects.push(GameObject.create(Vector.create(125,  15),  Vector.createDM(270,  .9), GRAPHICS.Circle.stroke,  largeRadius))
objects.push(GameObject.create(Vector.create(10,  300), Vector.createDM(10,   .2), GRAPHICS.Circle.stroke, mediumRadius))
objects.push(GameObject.create(Vector.create(200, 300), Vector.createDM(185, 1.5), GRAPHICS.Circle.stroke, mediumRadius))
objects.push(GameObject.create(Vector.create(150, 150), Vector.createDM(300,   1), GRAPHICS.Circle.stroke,  smallRadius))
objects.push(GameObject.create(Vector.create(10,   15),  Vector.createDM(34, 1.25), GRAPHICS.Circle.stroke,  smallRadius))
// objects.push(GameObject.create(Vector.create(canvas.width/2,  canvas.height/2),  Vector.createDM(0,0),  playerImage, playerRadius))




//The main game loop should happen in here
let renderLoop = () => {
    GRAPHICS.clear()
    objects.map((obj) => {
        GRAPHICS.render  (obj)
    })
}

let physicsLoop = () => {
    objects.map((obj) => {
        GameObject.move  (obj)
        constrain        (obj)
        objects.map((obj2) => {
            GameObject.hasCollided(obj, obj2)? console.log("collision"): false
        })
    })
}


const GAME = {
  renderLoop,
  physicsLoop
}

export default GAME