import { randomRotationDrone } from "../dataStructures/Drone"
import { isDrone } from "../hof/conditions"
import { droneSpawnSoundWrapper } from "./sound"
import Spawner from "./spawner"
import { generateRandomVelocity, generateSpawnLocation } from "./spawnHelperFunctions"

const DroneDifficultyVelocityRatio = 1 / 64
const needDrone = (_difficulty, count) => count < 1

export default Spawner(generateSpawnLocation, generateRandomVelocity(DroneDifficultyVelocityRatio), isDrone, needDrone, droneSpawnSoundWrapper(randomRotationDrone))