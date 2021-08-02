import { fireProjectileWhenReady } from "../behaviors/listMappers/fireProjectile.js";
import { setupRotationFunctions } from "../behaviors/objectMappers/rotate.js";
import { resetGameState } from "./global.js";
import { conditional } from "../hof/conditional.js";
import mapper from "../hof/mapper.js";
import motor from "../hof/motor.js";
import { isPlayer } from "../hof/conditions.js";
const applyAcceleration = (player) => ({ ...player, acceleration: .02 });
const playerRotationSpeed = 4;
export function setupInterface(gameState) {
    const [clockwise, counterClockwise] = setupRotationFunctions(playerRotationSpeed);
    const humanInterface = {
        fire: motor(gameState.objectList, fireProjectileWhenReady),
        rotateClockwise: motor(gameState.objectList, clockwise),
        rotateCounterclockwise: motor(gameState.objectList, counterClockwise),
        accelerate: motor(gameState.objectList, mapper(conditional(isPlayer, applyAcceleration))),
        reset: () => resetGameState(gameState),
        pause: motor(gameState.paused, paused => !paused)
    };
    return humanInterface;
}
//# sourceMappingURL=humanInterface.js.map