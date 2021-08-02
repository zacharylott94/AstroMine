import { spawnableAsteroid } from "../dataStructures/Asteroid.js";
import Vector from "../dataStructures/vector/Vector.js";
import { randomInteger } from "../libraries/random.js";
const difficultyRatio = 1 / 18;
const minAsteroidVelocity = .5;
const AsteroidDifficultyVelocityRatio = 1 / 36;
function generateSpawnLocation() {
    const spawnRing = 400;
    return Vector.add(Vector.fromDegreesAndMagnitude(randomInteger(360), spawnRing), Vector.CENTER_SCREEN);
}
function generateRandomVelocity(difficulty, position) {
    const targetPoint = Vector.add(Vector.fromDegreesAndMagnitude(randomInteger(360), 100), Vector.CENTER_SCREEN);
    const targetDirection = Vector.normalize(Vector.subtract(targetPoint, position));
    return Vector.scale(targetDirection, Math.max(minAsteroidVelocity, Math.random() * difficulty * AsteroidDifficultyVelocityRatio));
}
const AsteroidSpawnSystem = difficulty => (objectList) => {
    const asteroids = objectList.filter(obj => obj.type === 0);
    if (asteroids.length - 1 < (difficulty + 1) * difficultyRatio) {
        const location = generateSpawnLocation();
        return objectList.concat(spawnableAsteroid(location, generateRandomVelocity(difficulty, location)));
    }
    return objectList;
};
export default AsteroidSpawnSystem;
//# sourceMappingURL=asteroidSpawner.js.map