import { isDrone } from "../hof/conditions.js"
import { randomChoice, randomInteger } from "../libraries/random.js"

const CargoTemplate: Cargo = {
  count: 0,
  position: [],
  velocity: [0, 0],
  rotation: 0,
  angularVelocity: 0,
  type: ObjectType.Cargo,
  delete: false,
  radius: 4,
  hasCollidedWith: [],
  isCollidableWith: isDrone
}

export const Cargo = (location, velocity, count, rotation = 0, angularVelocity = 0): Cargo => {
  return {
    ...CargoTemplate,
    position: [location],
    velocity,
    count,
    rotation,
    angularVelocity,
  }
}

export const randomRotationCargo = (location, velocity, count) => Cargo(location, velocity, count, randomInteger(360), randomChoice(-2, 2, 2.5, -2.5))