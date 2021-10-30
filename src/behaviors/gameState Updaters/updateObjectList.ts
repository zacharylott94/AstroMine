import Collision from "../../engine/Collision"
import compose from "../../hof/compose"
import accelerateAll from "../listMappers/accelerateAll"
import constrainThingsWIthClones from "../listMappers/constrainThingsWIthClones"
import deleteIfCollided from "../listMappers/deletions/deleteIfCollided"
import deleteIfOutsideOfPlay from "../listMappers/deletions/deleteIfOutsideOfPlay"
import deleteObjectsOnTimeout from "../listMappers/deletions/deleteObjectsOnTimeout"
import deleteOrePickedUpByDrone from "../listMappers/deletions/deleteOrePickedUpByDrone"
import deletePickedUpCargo from "../listMappers/deletions/deletePickedUpCargo"
import deletePickedUpOre from "../listMappers/deletions/deletePickedUpOre"
import deletePlayerColliding from "../listMappers/deletions/deletePlayerColliding"
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
  deletePlayerColliding,
  shatterAsteroidsWithNoDurability,
  accelerateAll,
  deleteIfOutsideOfPlay,
  deletePickedUpCargo,
  deleteObjectsOnTimeout,
  deletePickedUpOre,
  deleteOrePickedUpByDrone,
  despawnOreOnTimeout,
  explodeIntoOre,
  resetAllAccelerations,
  grantClonesOnTrigger,
].reduce(compose) as Endofunctor<GameObject[]>


