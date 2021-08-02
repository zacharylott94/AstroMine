import { isPlayerProjectile, isCloneTrigger } from "../hof/conditions.js";
import { partial } from "../hof/partial.js";
import { randomDirectionVector } from "../libraries/random.js";
import GenericFactory from "./genericObject.js";
import Position from "./position/Position.js";
import Vector from "./vector/Vector.js";
import Ore from "./Ore.js";
import or from "../hof/or.js";
const SIZE_TO_RADIUS = [
    15,
    25,
    40,
];
const DURABILITY = 3;
const VELOCITY_SCALE = 1.1;
const SPREAD = 30;
const DEADZONE = 5;
const SpawnableTemplate = {
    hasCollidedWith: [],
    durability: 3,
    size: 2,
    isCollidableWith: or(isPlayerProjectile, isCloneTrigger),
    radius: 40,
    type: 0,
    delete: false
};
export const spawnableAsteroid = (location, velocity) => {
    return {
        ...SpawnableTemplate,
        position: [location],
        velocity,
    };
};
export const create = size => (location, velocity, durability = DURABILITY, sizeToRadius = SIZE_TO_RADIUS) => {
    return {
        ...GenericFactory(location, velocity, sizeToRadius[size], 0),
        hasCollidedWith: [],
        durability,
        size,
        isCollidableWith: isPlayerProjectile
    };
};
const shatterVelocities = (asteroid, spread = SPREAD, deadzone = DEADZONE, velocityScale = VELOCITY_SCALE) => {
    const asteroidDirection = Vector.degrees(asteroid.velocity);
    const newAngles = [asteroidDirection + spread + deadzone, asteroidDirection - spread - deadzone];
    const magnitude = Vector.magnitude(asteroid.velocity);
    return newAngles
        .map(angle => randomDirectionVector(angle, spread * 2))
        .map(vector => Vector.scale(vector, magnitude, velocityScale));
};
export const shatter = (asteroid) => {
    const factory = partial(create(asteroid.size - 1), Position.real(asteroid.position));
    if (asteroid.size === 0)
        return [{ ...asteroid, delete: true }, Ore(Position.real(asteroid.position), asteroid.velocity)];
    return shatterVelocities(asteroid)
        .map(vel => factory(vel))
        .concat({ ...asteroid, delete: true });
};
export default {
    create
};
//# sourceMappingURL=Asteroid.js.map