
import { isAsteroid, isCargo } from "../hof/conditions.js"
import or from "../hof/or.js"
import GenericFactory from "./genericObject.js"
import Position from "./position/Position.js"
import Vector from "./vector/Vector.js"

const PROJECTILE_SPEED = 4
const PROJECTILE_TTL = 200

type projectileSettings = {
  rotation: Degrees,
  inheritedVelocity: TVector,
  location: TVector,
  isCollidableWith: collisionMask,
  owner: ObjectType,
}

export const Projectile = (settings: projectileSettings): Projectile => {
  const velocity = Vector.fromDegreesAndMagnitude(settings.rotation, PROJECTILE_SPEED)
  return {
    ...GenericFactory(settings.location, Vector.add(velocity, settings.inheritedVelocity), 1, ObjectType.Projectile),
    ttl: PROJECTILE_TTL,
    rotation: settings.rotation,
    hasCollidedWith: [],
    isCollidableWith: settings.isCollidableWith,
    owner: settings.owner,
    angularVelocity: 0
  }
}

export const PlayerProjectile = player => {
  const location = Vector.add(Position.real(player.position),
    Vector.fromDegreesAndMagnitude(player.rotation, 10))
  let settings: projectileSettings = {
    location,
    rotation: player.rotation,
    owner: ObjectType.Player,
    isCollidableWith: or(isAsteroid, isCargo),
    inheritedVelocity: player.velocity
  }
  return Projectile(settings)
}