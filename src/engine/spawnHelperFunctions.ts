import Vector from "../dataStructures/vector/Vector"
import { randomInteger } from "../libraries/random"


export function generateSpawnLocation(): TVector {
  const spawnRing = 400
  return Vector.add(Vector.fromDegreesAndMagnitude(randomInteger(360), spawnRing),
    Vector.CENTER_SCREEN)

}

export function generateRandomVelocity(velocityScale = 1, position): TVector {
  const minVelocity = .5
  const targetPoint = Vector.add(
    Vector.fromDegreesAndMagnitude(randomInteger(360), 100),
    Vector.CENTER_SCREEN)
  const targetDirection = Vector.normalize(
    Vector.subtract(targetPoint, position)
  )
  return Vector.scale(targetDirection, Math.max(minVelocity, Math.random() * velocityScale))
}
