import { stator } from "../hof/stator.js";
import Player from "../dataStructures/Player.js";
import wrapTrigger from "../dataStructures/wrapTrigger.js";
export const initGameState = () => ({
    timer: stator(0),
    paused: stator(false),
    objectList: stator(new Array()),
    particleList: stator(new Array()),
    score: stator(0),
    ore: stator(0)
});
export const resetGameState = (gameState) => {
    gameState.timer(_ => 0);
    gameState.paused(_ => false);
    gameState.objectList(_ => [Player(), wrapTrigger()]);
    gameState.particleList(_ => []);
    gameState.score(_ => 0);
    gameState.ore(_ => 0);
};
//# sourceMappingURL=global.js.map