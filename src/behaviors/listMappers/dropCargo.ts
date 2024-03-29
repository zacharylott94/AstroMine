import { randomRotationCargo } from "../../dataStructures/Cargo"
import Position from "../../dataStructures/position/Position"
import { jettisonSound } from "../../engine/sound"
import getPlayer from "../listReducers/getPlayer"


export const dropCargo = (ore: Stator<number>) => objectList => {
  const oreCount = ore()
  if (oreCount < 1) return objectList
  const player = getPlayer(objectList)
  if (!player) return objectList

  ore(_ => 0)
  jettisonSound()
  return objectList.concat(randomRotationCargo(Position.real(player.position), player.velocity, oreCount))
}
