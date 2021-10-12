import { conditional } from "../hof/conditional.js"
import mapper from "../hof/mapper.js"
import { isType } from "../hof/conditions.js"
import compose from "../hof/compose.js"
import { partial } from "../hof/partial.js"
import passthrough from "../hof/passthrough.js"
import { asteroidRenderer, cargoRenderer, droneRenderer, oreRenderer, playerRenderer, projectileRenderer } from "./objectRenderers.js"
import { dotParticleRenderer, XParticleRenderer } from "./particleRenderers.js"

const particlesToPositionTypeTuples = (time, particles) => particles.map(particle => particle(time))
export const particleRenderer = time => (particles: Particle[]) => {
  const renderer = [
    partial(particlesToPositionTypeTuples, time),
    mapper(conditional(isType(ParticleType.Dot), passthrough(dotParticleRenderer))),
    mapper(conditional(isType(ParticleType.X), passthrough(XParticleRenderer)))
  ].reduce(compose)
  return renderer(particles)
}


export const gameObjectRenderer = [
  asteroidRenderer,
  playerRenderer,
  projectileRenderer,
  oreRenderer,
  droneRenderer,
  cargoRenderer,
].reduce(compose)