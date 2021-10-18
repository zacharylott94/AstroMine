import { conditional } from "../hof/conditional"
import mapper from "../hof/mapper"
import { isType } from "../hof/conditions"
import compose from "../hof/compose"
import { partial } from "../hof/partial"
import passthrough from "../hof/passthrough"
import { asteroidRenderer, cargoRenderer, droneRenderer, oreRenderer, playerRenderer, projectileRenderer } from "./objectRenderers"
import { dotParticleRenderer, XParticleRenderer } from "./particleRenderers"

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