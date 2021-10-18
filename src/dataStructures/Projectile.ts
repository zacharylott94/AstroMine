
import { isAsteroid, isCargo, isDrone } from "../hof/conditions"
import or from "../hof/or"
import Position from "./position/Position"
import Vector from "./vector/Vector"

const PROJECTILE_SPEED = 4
const PROJECTILE_TTL = 200

type projectileSettings = {
  rotation: Degrees,
  inheritedVelocity: TVector,
  location: TVector,
  isCollidableWith: collisionMask,
  owner: ObjectType,
}

const projectileTemplate: Projectile = {
  ttl: PROJECTILE_TTL,
  position: [Vector.ZERO],
  velocity: Vector.ZERO,
  radius: 1,
  rotation: 0,
  hasCollidedWith: [],
  isCollidableWith: () => false,
  owner: ObjectType.Generic,
  angularVelocity: 0,
  type: ObjectType.Projectile,
  delete: false
}

const Projectile = (settings: projectileSettings): Projectile => {
  const velocity = Vector.fromDegreesAndMagnitude(settings.rotation, PROJECTILE_SPEED)
  return {
    ...projectileTemplate,
    position: Position.fromVector(settings.location),
    velocity: Vector.add(velocity, settings.inheritedVelocity),
    ttl: PROJECTILE_TTL,
    rotation: settings.rotation,
    isCollidableWith: settings.isCollidableWith,
    owner: settings.owner,
  }
}

export const PlayerProjectile = player => {
  const location = Vector.add(Position.real(player.position),
    Vector.fromDegreesAndMagnitude(player.rotation, 10))
  let settings: projectileSettings = {
    location,
    rotation: player.rotation,
    owner: ObjectType.Player,
    isCollidableWith: [isAsteroid, isCargo, isDrone].reduce(or),
    inheritedVelocity: player.velocity
  }
  return Projectile(settings)
}