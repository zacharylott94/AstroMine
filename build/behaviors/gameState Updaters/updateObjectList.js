import { shatter } from "../../dataStructures/Asteroid.js";
import Collision from "../../engine/Collision.js";
import compose from "../../hof/compose.js";
import { conditional } from "../../hof/conditional.js";
import { isPlayer, isAsteroidWithNoDurability, hasAcceleration, isRotatable } from "../../hof/conditions.js";
import mapper from "../../hof/mapper.js";
import accelerate from "../objectMappers/accelerate.js";
import { rotate } from "../objectMappers/rotate.js";
import moveAllMoveable from "../listMappers/moveAllMoveable.js";
import removeDeleted from "../listMappers/removeDeleted.js";
import tickAllTTL from "../listMappers/tickAllTTL.js";
import flagForDespawn from "../listMappers/flagForDespawn.js";
import constrainThingsWIthClones from "../listMappers/constrainThingsWIthClones.js";
import deleteIfPlayerCollidingWithAsteroid from "../listMappers/deleteIfPlayerCollidingWithAsteroid.js";
import deleteIfCollided from "../listMappers/deleteIfCollided.js";
import tickDurabilityIfHitByPlayer from "../listMappers/tickDurabilityIfHitByPlayer.js";
import grantClones from "../listMappers/grantClones.js";
const shatterIfNoDurability = compose(mapper(conditional(isAsteroidWithNoDurability, (obj) => shatter(obj))), list => list.flat());
const resetAcceleration = mapper(conditional(hasAcceleration, (obj) => ({ ...obj, acceleration: 0 })));
const resetPlayerAngularVelocity = mapper(conditional(isPlayer, (player) => ({ ...player, angularVelocity: 0 })));
const rotateObjects = mapper(conditional(isRotatable, rotate));
export const updateObjectList = [
    removeDeleted,
    Collision.reset,
    moveAllMoveable,
    constrainThingsWIthClones,
    rotateObjects,
    resetPlayerAngularVelocity,
    tickAllTTL,
    Collision.checkAgainstMask,
    tickDurabilityIfHitByPlayer,
    deleteIfCollided,
    deleteIfPlayerCollidingWithAsteroid,
    shatterIfNoDurability,
    mapper(conditional(hasAcceleration, accelerate)),
    resetAcceleration,
    flagForDespawn,
    grantClones,
].reduce(compose);
//# sourceMappingURL=updateObjectList.js.map