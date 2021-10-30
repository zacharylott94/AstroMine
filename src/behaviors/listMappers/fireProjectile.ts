import { PlayerProjectile } from "../../dataStructures/Projectile"
import { playerShootSound } from "../../engine/sound"
import and from "../../hof/and"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { isPlayerProjectile, isPlayer } from "../../hof/conditions"
import getPlayer from "../listReducers/getPlayer"


function fireProjectile(objectList) {
  const player = getPlayer(objectList)
  return objectList.concat(PlayerProjectile(player))
}

const lessThanThreeProjectiles = objectList => objectList.filter(isPlayerProjectile).length < 3

const hasPlayer = list => list.filter(isPlayer).length > 0
export const fireProjectileWhenReady = conditional(and(lessThanThreeProjectiles, hasPlayer), compose(playerShootSound, fireProjectile))
