import Collision from "../../engine/Collision"
import compose from "../../hof/compose"
import accelerateAll from "../listMappers/accelerateAll"
import constrainThingsWIthClones from "../listMappers/constrainThingsWIthClones"
import deleteIfCollided from "../listMappers/deletions/deleteIfCollided"
import deleteIfOutsideOfPlay from "../listMappers/deletions/deleteIfOutsideOfPlay"
import deleteIfPlayerCollidingWithAsteroid from "../listMappers/deletions/deleteIfPlayerCollidingWithAsteroid"
import deleteObjectsOnTimeout from "../listMappers/deletions/deleteObjectsOnTimeout"
import deletePickedUpCargo from "../listMappers/deletions/deletePickedUpCargo"
import deletePlayerCollidingWithDrone from "../listMappers/deletions/deletePlayerCollidingWithDrone"
import despawnOreOnTimeout from "../listMappers/despawnOreOnTimeout"
import explodeIntoOre from "../listMappers/explodeIntoOre"
import grantClonesOnTrigger from "../listMappers/grantClonesOnTrigger"
import moveAllMoveable from "../listMappers/moveAllMoveable"
import removeDeleted from "../listMappers/removeDeleted"
import resetAllAccelerations from "../listMappers/resetAllAccelerations"
import resetPlayerAngularVelocity from "../listMappers/resetPlayerAngularVelocity"
import rotateObjects from "../listMappers/rotateObjects"
import shatterAsteroidsWithNoDurability from "../listMappers/shatterAsteroidsWithNoDurability"
import tickAllTTL from "../listMappers/tickAllTTL"
import tickDurabilityIfHitByPlayer from "../listMappers/tickDurabilityIfHitByPlayer"


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
  deleteObjectsOnTimeout,
  despawnOreOnTimeout,
  explodeIntoOre,
  resetAllAccelerations,
  grantClonesOnTrigger,
].reduce(compose)


