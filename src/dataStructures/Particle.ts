import Vector from "./vector/Vector.js"
import wrapVector from "./vector/wrapVector.js"

type acceleration = (time: number) => TVector

const particleEquation = (position: TVector, velocity: TVector, acceleration: acceleration, timeOffset: number, time: number) => {
  const relativeTime = time - timeOffset
  return [
    position,
    Vector.scale(velocity, relativeTime),
    Vector.scale(acceleration(relativeTime), .5, relativeTime * relativeTime)
  ].reduce(Vector.add)
}

export const Particle = vectorWrap => (timeOffset: number, position: TVector, velocity: TVector, ttl = Number.MAX_SAFE_INTEGER, acceleration: acceleration, type = ParticleType.Dot): Particle => (time: number) => {
  if (time >= ttl + timeOffset) return { position: Vector.INF, type }
  return {
    position: wrapVector(vectorWrap, particleEquation(position, velocity, acceleration, timeOffset, time)),
    type
  }
}

export const nullParticle: Particle = _ => ({ position: Vector.ZERO, type: ParticleType.Dot })