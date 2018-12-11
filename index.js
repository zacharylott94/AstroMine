

const createCircleImage = (radius) => { //creates a circle image
    let padding = 5
    let circle = document.createElement("canvas")
    circle.width, circle.height = radius*2+padding
    let ctx = circle.getContext("2d")
    ctx = style(ctx)
    ctx.beginPath()
    let xy = radius+padding/2
    ctx.arc(xy, xy, radius, 0, 2 * Math.PI)
    ctx.stroke()
    return circle
}

const style = (ctx) => { //sets canvas fill and stroke styles
    ctx.translate(0.5,0.5)
    ctx.imageSmoothingEnabled = false
    ctx.fillStyle = fill
    ctx.strokeStyle = stroke
    return ctx
}

const clear = (ctx) => { //clears the canvas
    ctx.fillRect(0,0,ctx.width,ctx.height)
}

const CreateObject = (x,y,vector, ctx, image) => {
    const object = {
        x:x,
        y:y,
        vector:vector,
        ctx:ctx,
        image: image,
        update: function() { //"this" is trash
            //First update position
            this.x = this.x + this.vector.x
            this.y = this.y + this.vector.y
        }

    }
    return object
}


const WrapperClones = (object) => {

}
const constrain = (object) => { //makes sure the object stays in the playing field
    if (object.x > ctx.width){
        object.x = object.x - ctx.width
    }
    if (object.y > ctx.height){
        object.y = object.y - ctx.height
    }
    if (object.x < 0){
        object.x = object.x + ctx.width
    }
    if (object.y < 0){
        object.y = object.y + ctx.height
    }
}

const CreateRenderer = (ctx) => {
    return (object) => {
        ctx.drawImage(object.image, object.x, object.y)
        ctx.drawImage(object.image, object.x + ctx.width, object.y)
        ctx.drawImage(object.image, object.x - ctx.width, object.y)
        ctx.drawImage(object.image, object.x, object.y + ctx.height)
        ctx.drawImage(object.image, object.x, object.y - ctx.height)
        ctx.drawImage(object.image, object.x - ctx.width, object.y - ctx.height)
        ctx.drawImage(object.image, object.x + ctx.width, object.y - ctx.height)
        ctx.drawImage(object.image, object.x - ctx.width, object.y + ctx.height)
        ctx.drawImage(object.image, object.x + ctx.width, object.y + ctx.height)
    }
}



//---------------Main--------------------

console.log("Hello World")
const fill = "black"
const stroke = "rgb(0,255,0)"
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
ctx.width = canvas.width   //bind canvas dimensions to the context for convenience
ctx.height = canvas.height
ctx = style(ctx)  //Set our fill and stroke styles
const render = CreateRenderer(ctx)


let objects = []
objects.push(CreateObject(10,15,{x:1,y:2},ctx,createCircleImage(40)))
objects.push(CreateObject(100,15,{x:-1,y:2},ctx,createCircleImage(50)))
objects.push(CreateObject(10,150,{x:2,y:1},ctx,createCircleImage(55)))
objects.push(CreateObject(200,300,{x:-2,y:.5},ctx,createCircleImage(45)))
objects.push(CreateObject(150,150,{x:.5,y:.5},ctx,createCircleImage(60)))
objects.push(CreateObject(10,15,{x:-.5,y:1},ctx,createCircleImage(65)))


setInterval(() => {
    clear(ctx)
    objects.map((object)=>{
        object.update()
        constrain(object)
        render(object)
    })
},1000/60)
