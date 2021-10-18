import Vector from "./vector/Vector"

const wrapTrigger = (): Trigger => {
  return {
    radius: 100,
    position: [Vector.CENTER_SCREEN],
    type: ObjectType.CloneTrigger,
    isCollidableWith: _obj => false,
    hasCollidedWith: []
  }
}

export default wrapTrigger