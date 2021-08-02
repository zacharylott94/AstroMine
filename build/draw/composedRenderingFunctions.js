import { conditional } from "../hof/conditional.js";
import mapper from "../hof/mapper.js";
import { isAsteroid, isOre, isPlayer, isProjectile } from "../hof/conditions.js";
import { circle, unitCircle } from "./circle.js";
import playerShipGraphic from "./playerShipGraphic.js";
import projectileGraphic from "./projectileGraphic.js";
import Renderer from "./renderer.js";
import { canvasContextScope } from "./canvasContextScope.js";
import compose from "../hof/compose.js";
import square from "./square.js";
function buildRenderer(condition, draw) {
    return mapper(conditional(condition, Renderer(canvasContextScope(draw))));
}
const particlesToPositions = (time, particles) => particles.map(particle => particle(time));
const positionToCircle = canvasContextScope(unitCircle);
export const particleRenderer = time => (particles) => {
    particlesToPositions(time, particles).forEach(positionToCircle);
    return particles;
};
export const asteroidRenderer = buildRenderer(isAsteroid, circle);
export const oreRenderer = buildRenderer(isOre, square);
export const playerRenderer = buildRenderer(isPlayer, playerShipGraphic);
export const projectileRenderer = buildRenderer(isProjectile, projectileGraphic);
export const gameObjectRenderer = [
    asteroidRenderer,
    playerRenderer,
    projectileRenderer,
    oreRenderer,
].reduce(compose);
//# sourceMappingURL=composedRenderingFunctions.js.map