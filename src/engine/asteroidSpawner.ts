import { create as Asteroid } from "../dataStructures/Asteroid.js"
import Position from "../dataStructures/position/Position.js"
import Vector from "../dataStructures/vector/Vector.js"
import { GameDimensions } from "../GameDimensions.js"

const largeAsteroid = Asteroid(2)
const difficultyRatio = 1 / 18
const playerSafetyRadius = 200
const minAsteroidVelocity = .5
const AsteroidDifficultyVelocityRatio = 1 / 36

function generateSpawnLocation(objectList: GameObject[]): TVector {
  const player = objectList.filter(object => object.type === ObjectType.Player)[0]
  if (player === undefined) return Vector.ZERO
  //Get random positions until one of them is outside a radius around the player
  while (true) {
    const newPosition = Vector.fromComponents(Math.random() * GameDimensions[0], Math.random() * GameDimensions[0])
    if (Vector.distanceSquared(newPosition, Position.closestTo(player.position, newPosition)) > playerSafetyRadius * playerSafetyRadius) {
      return newPosition
    }
  }
}

function generateRandomVelocity(difficulty: number): TVector {
  return Vector.fromDegreesAndMagnitude(Math.random() * 360,
    Math.max(minAsteroidVelocity, Math.random() * difficulty * AsteroidDifficultyVelocityRatio))
}

const AsteroidSpawnSystem = difficulty => (objectList: GameObject[]): GameObject[] => {
  const asteroids = objectList.filter(obj => obj.type === ObjectType.Asteroid)
  if (asteroids.length - 1 < (difficulty + 1) * difficultyRatio)
    return objectList.concat(largeAsteroid(generateSpawnLocation(objectList), generateRandomVelocity(difficulty)))
  return objectList
}

export default AsteroidSpawnSystem