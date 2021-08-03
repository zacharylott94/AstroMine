import { isCargo } from "../hof/conditions.js"

export default (location, velocity): Drone => {
  return {
    position: [location],
    velocity,
    hasCollidedWith: [],
    isCollidableWith: isCargo,
    type: ObjectType.Drone,
    delete: false,
    radius: 8,
  }
}