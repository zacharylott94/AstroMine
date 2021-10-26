import { spawnableAsteroid } from "../dataStructures/Asteroid"
import { isAsteroid } from "../hof/conditions"
import Spawner from "./spawner"
import { generateRandomVelocity, generateSpawnLocation } from "./spawnHelperFunctions"

const difficultyRatio = 1 / 18
const AsteroidDifficultyVelocityRatio = 1 / 36
const needMoreAsteroids = (difficulty, count) => count - 1 < (difficulty + 1) * difficultyRatio

const asteroidSpawner = Spawner(generateSpawnLocation, generateRandomVelocity(AsteroidDifficultyVelocityRatio), isAsteroid, needMoreAsteroids, spawnableAsteroid)

export default asteroidSpawner