import { randomRotationDrone } from "../dataStructures/Drone"
import { generateRandomVelocity, generateSpawnLocation } from "./spawnHelperFunctions"

const DroneDifficultyVelocityRatio = 1 / 64


const DroneSpawner = (locationGenerator, velocityGenerator) => difficulty => (objectList: GameObject[]): GameObject[] => {
  const drones = objectList.filter(obj => obj.type === ObjectType.Drone)
  if (drones.length < 1) {
    const location = locationGenerator()
    const velocity = velocityGenerator(difficulty * DroneDifficultyVelocityRatio, location)
    return objectList.concat(randomRotationDrone(location, velocity))
  }
  return objectList
}

export default DroneSpawner(generateSpawnLocation, generateRandomVelocity)