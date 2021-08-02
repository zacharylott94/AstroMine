import { gameObjectRenderer, particleRenderer } from "../composedRenderingFunctions.js";
import drawText from "../text.js";
import fif from "../../hof/fif.js";
import text from "../text.js";
import Vector from "../../dataStructures/vector/Vector.js";
export const gameRenderSetup = (gameState) => {
    return fif(gameState.paused, () => text(() => Vector.CENTER_SCREEN, () => 'PAUSED', { size: '2em' }), () => {
        gameState.objectList(gameObjectRenderer);
        gameState.particleList(particleRenderer(gameState.timer()));
        drawText(() => [Vector.CENTER_SCREEN[0], 20], () => `SCORE: ${gameState.ore()}`);
    });
};
//# sourceMappingURL=gameRenderSetup.js.map