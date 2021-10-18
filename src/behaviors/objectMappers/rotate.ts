import { conditional } from "../../hof/conditional"
import { isPlayer } from "../../hof/conditions"
import mapper from "../../hof/mapper"


export const rotate = object => ({ ...object, rotation: object.rotation + object.angularVelocity })
const setAngularVelocity = angularVelocity => object => ({ ...object, angularVelocity })
const rotatePlayerInObjectList = amount => mapper(conditional(isPlayer, setAngularVelocity(amount)))

export const setupRotationFunctions = amount => [
  rotatePlayerInObjectList(amount),
  rotatePlayerInObjectList(-amount)
]