class Vector{
  x: number
  y: number
  public static width: number = 500
  public static height: number = 500

  constructor(x?: number, y?: number) {
    this.x = x || 0
    this.y = y || 0
  }
  static fromDegreesAndMagnitude(degrees: number, magnitude: number) {
    const angle = Math.PI * 2 / 360 * degrees
    const x = Math.cos(angle)
    const y = Math.sin(angle)
    return new Vector(x * magnitude, y * magnitude)
  }
  static add(vec1:Vector,vec2:Vector){
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y)
  }

  scale(...scalars: [number]){
    const scalar = scalars.reduce((acc, next) => {return acc * next})
    return new Vector(this.x*scalar, this.y*scalar)
  }

  degrees() {
    const rad = this.radians()
    const deg = rad * 360 / 2 / Math.PI
    return deg
  }
  normalize() {
    return new Vector(this.x/this.magnitude(), this.y/this.magnitude())
  }
  radians() {
    return Math.asin(this.normalize().y)
  }
  magnitude() {
    return Math.sqrt(this.squaredMagnitude())
  }
  squaredMagnitude() {
    const x: number = this.x
    const y: number = this.y
    return (x*x + y*y)
  }
  static distanceSquared(vector1:Vector, vector2:Vector){
    let dx = Math.abs(vector2.x - vector1.x)
    let dy = Math.abs(vector2.y - vector1.y)
    let cx = Vector.width - dx //the c stands for complimentary, lol
    let cy = Vector.height - dy
    dx =  dx <= cx? dx: cx  //if dx is smaller than cx, use dx, otherwise cx
    dy =  dy <= cy? dy: cy //if dy is smaller than cy, use dy, otherwise cy
    
    // console.log(`dx:${dx},dy:${dy},cx:${cx},cy:${cy}`)
    dx *= dx
    dy *= dy
    const sum = dx + dy
    return sum
  }
  static distance(vector1: Vector, vector2: Vector){
    return Math.sqrt(Vector.distanceSquared(vector1, vector2))
  }

  static UP()    {return new Vector(0,-1)}
  static DOWN()  {return new Vector(0,1) }
  static LEFT()  {return new Vector(-1,0)}
  static RIGHT() {return new Vector(1,0) }
}

export default Vector