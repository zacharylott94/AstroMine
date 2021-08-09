import Collision from "../../engine/Collision.js"
import compose from "../../hof/compose.js"
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
import shatterAsteroidsWithNoDurability from "../listMappers/shatterAsteroidsWithNoDurability.js"
import resetAllAccelerations from "../listMappers/resetAllAccelerations.js"
import resetPlayerAngularVelocity from "../listMappers/resetPlayerAngularVelocity.js"
import rotateObjects from "../listMappers/rotateObjects.js"
import accelerateAll from "../listMappers/accelerateAll.js"

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
  shatterAsteroidsWithNoDurability,
  accelerateAll,
  deleteIfOutsideOfPlay,
  deletePickedUpCargo,
  deleteProjectilesOnTimeout,
  despawnOreOnTimeout,
  explodeIntoOre,
  resetAllAccelerations,
  grantClones,
].reduce(compose)


