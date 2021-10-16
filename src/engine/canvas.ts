import Vector from "../dataStructures/vector/Vector.js"
const element: any = document.getElementById("canvas")
element.width = Vector.GAME_DIMENSIONS[0]
element.height = Vector.GAME_DIMENSIONS[1]
export let context = element.getContext("2d")
context.translate(0.5, 0.5)            //an attempt to remove anti-aliasing
context.imageSmoothingEnabled = false  //an attempt to remove anti-aliasing
context.fillColor = "black"
context.strokeStyle = "rgb(0,255,0)"

