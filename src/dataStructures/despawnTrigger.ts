import Vector from "./vector/Vector.js"

const despawnTrigger = (): Trigger => {
  return {
    radius: 900,
    position: [Vector.CENTER_SCREEN],
    type: ObjectType.DespawnTrigger,
    isCollidableWith: _obj => false,
    hasCollidedWith: []
  }
}

export default despawnTrigger