import { spawnableAsteroid } from "../dataStructures/Asteroid"
import { generateRandomVelocity, generateSpawnLocation } from "./spawnHelperFunctions"

const difficultyRatio = 1 / 18
const AsteroidDifficultyVelocityRatio = 1 / 36


const AsteroidSpawnSystem = (locationGenerator, velocityGenerator) => difficulty => (objectList: GameObject[]): GameObject[] => {
  const asteroids = objectList.filter(obj => obj.type === ObjectType.Asteroid)
  if (asteroids.length - 1 < (difficulty + 1) * difficultyRatio) {
    const location = locationGenerator()
    return objectList.concat(spawnableAsteroid(location, velocityGenerator(difficulty * AsteroidDifficultyVelocityRatio, location)))
  }
  return objectList
}

export default AsteroidSpawnSystem(generateSpawnLocation, generateRandomVelocity)