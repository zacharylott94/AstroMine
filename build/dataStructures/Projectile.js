import { isAsteroid } from "../hof/conditions.js";
import GenericFactory from "./genericObject.js";
import Position from "./position/Position.js";
import Vector from "./vector/Vector.js";
const PROJECTILE_SPEED = 4;
const PROJECTILE_TTL = 200;
export const Projectile = (settings) => {
    const velocity = Vector.fromDegreesAndMagnitude(settings.rotation, PROJECTILE_SPEED);
    return {
        ...GenericFactory(settings.location, Vector.add(velocity, settings.inheritedVelocity), 1, 2),
        ttl: PROJECTILE_TTL,
        rotation: settings.rotation,
        hasCollidedWith: [],
        isCollidableWith: settings.isCollidableWith,
        owner: settings.owner,
        angularVelocity: 0
    };
};
export const PlayerProjectile = player => {
    const location = Vector.add(Position.real(player.position), Vector.fromDegreesAndMagnitude(player.rotation, 10));
    let settings = {
        location,
        rotation: player.rotation,
        owner: 1,
        isCollidableWith: isAsteroid,
        inheritedVelocity: player.velocity
    };
    return Projectile(settings);
};
//# sourceMappingURL=Projectile.js.map