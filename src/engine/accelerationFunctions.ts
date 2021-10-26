import Vector from "../dataStructures/vector/Vector"
import { randomNumber } from "../libraries/random"

export const wavy = ({ offset = () => randomNumber(Math.PI * 2), amplitude = 5, period = 10, yAxis }) => {
  const accelerationBuilder = () => {
    const fixedOffset = offset()
    const acceleration = time => {
      return Vector.fromDegreesAndMagnitude(
        yAxis,
        Math.sin((time / period) + fixedOffset) * amplitude / (time * time)
      )
    }
    return acceleration

  }


  return accelerationBuilder

}

const constantAcceleration = (acceleration: TVector) => () => _time => acceleration
export const zeroAcceleration = constantAcceleration(Vector.ZERO)