import { shatter } from "../../dataStructures/Asteroid.js"

import Collision from "../../engine/Collision.js"
import compose from "../../hof/compose.js"
import { conditional } from "../../hof/conditional.js"
import { isPlayer, isAsteroidWithNoDurability, hasAcceleration, isRotatable } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import accelerate from "../objectMappers/accelerate.js"
import { rotate } from "../objectMappers/rotate.js"
import moveAllMoveable from "../listMappers/moveAllMoveable.js"
import removeDeleted from "../listMappers/removeDeleted.js"
import tickAllTTL from "../listMappers/tickAllTTL.js"
import constrainThingsWIthClones from "../listMappers/constrainThingsWIthClones.js"
import deleteIfPlayerCollidingWithAsteroid from "../listMappers/deletions/deleteIfPlayerCollidingWithAsteroid.js"
import deleteIfCollided from "../listMappers/deletions/deleteIfCollided.js"
import tickDurabilityIfHitByPlayer from "../listMappers/tickDurabilityIfHitByPlayer.js"
import grantClones from "../listMappers/grantClones.js"
import deletePickedUpCargo from "../listMappers/deletions/deletePickedUpCargo.js"
import deletePlayerCollidingWithDrone from "../listMappers/deletions/deletePlayerCollidingWithDrone.js"
import deleteIfOutsideOfPlay from "../listMappers/deletions/deleteIfOutsideOfPlay.js"
import explodeIntoOre from "../listMappers/explodeIntoOre.js"
import deleteProjectilesOnTimeout from "../listMappers/deletions/deleteProjectilesOnTimeout.js"
import despawnOreOnTimeout from "../listMappers/despawnOreOnTimeout.js"

const shatterIfNoDurability = compose(
  mapper(conditional(isAsteroidWithNoDurability, (obj: Asteroid): any => shatter(obj))),
  list => list.flat()
)

const resetAcceleration = mapper(conditional(hasAcceleration, (obj: any) => ({ ...obj, acceleration: 0 })))
const resetPlayerAngularVelocity = mapper(conditional(isPlayer, (player: Player) => ({ ...player, angularVelocity: 0 })))
const rotateObjects = mapper(conditional(isRotatable, rotate))

export const updateObjectList = [
  removeDeleted,
  Collision.reset,
  moveAllMoveable,
  constrainThingsWIthClones,
  rotateObjects,
  resetPlayerAngularVelocity,
  tickAllTTL,
  Collision.checkAgainstMask,
  tickDurabilityIfHitByPlayer,
  deleteIfCollided,
  deleteIfPlayerCollidingWithAsteroid,
  deletePlayerCollidingWithDrone,
  shatterIfNoDurability,
  mapper(conditional(hasAcceleration, accelerate)),
  deleteIfOutsideOfPlay,
  deletePickedUpCargo,
  deleteProjectilesOnTimeout,
  despawnOreOnTimeout,
  explodeIntoOre,
  resetAcceleration,
  grantClones,
].reduce(compose)


