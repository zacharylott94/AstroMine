import { conditional } from "../hof/conditional.js"
import mapper from "../hof/mapper.js"
import { isAsteroid, isCargo, isDrone, isType, isOre, isPlayer, isProjectile } from "../hof/conditions.js"
import { circle } from "./circle.js"
import playerShipGraphic from "./playerShipGraphic.js"
import projectileGraphic from "./projectileGraphic.js"
import Renderer from "./renderer.js"
import { canvasContextScope } from "./canvasContextScope.js"
import compose from "../hof/compose.js"
import ngon from "./ngon.js"
import { drawX } from "./drawX.js"
import { partial } from "../hof/partial.js"
import { dotParticleRenderer } from "./dotParticleRenderer.js"
import passthrough from "../hof/passthrough.js"

function buildRenderer(condition, draw) {
  return mapper(conditional(condition, Renderer(canvasContextScope(draw))))
}

const particlesToPositionTypeTuples = (time, particles) => particles.map(particle => particle(time))
export const particleRenderer = time => (particles: Particle[]) => {
  const renderer = [
    partial(particlesToPositionTypeTuples, time),
    mapper(conditional(isType(ParticleType.Dot), passthrough(dotParticleRenderer))),
    mapper(conditional(isType(ParticleType.X), passthrough(drawX)))
  ].reduce(compose)
  return renderer(particles)
}

const asteroidRenderer = buildRenderer(isAsteroid, circle)
const oreRenderer = buildRenderer(isOre, ngon(4))
const playerRenderer = buildRenderer(isPlayer, playerShipGraphic)
const projectileRenderer = buildRenderer(isProjectile, projectileGraphic)
const droneRenderer = buildRenderer(isDrone, ngon(6))
const cargoRenderer = buildRenderer(isCargo, ngon(5))
export const gameObjectRenderer = [
  asteroidRenderer,
  playerRenderer,
  projectileRenderer,
  oreRenderer,
  droneRenderer,
  cargoRenderer,
].reduce(compose)