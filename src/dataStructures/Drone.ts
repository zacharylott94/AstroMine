import { randomChoice, randomInteger } from "../libraries/random.js"


const droneTemplate: Drone = {
  position: [],
  velocity: [0, 0],
  hasCollidedWith: [],
  isCollidableWith: _ => false,
  type: ObjectType.Drone,
  delete: false,
  radius: 8,
  rotation: 0,
  angularVelocity: 0,
}

const Drone = (location, velocity, rotation = 0, angularVelocity = 0): Drone => {
  return {
    ...droneTemplate,
    position: [location],
    velocity,
    rotation,
    angularVelocity,
  }
}


export const randomRotationDrone = (location, velocity) => Drone(location, velocity, randomInteger(360), randomChoice(-2, 2, 1.5, -1.5))
export default Drone