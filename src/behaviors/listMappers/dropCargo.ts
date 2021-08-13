import { randomRotationCargo } from "../../dataStructures/Cargo.js"
import Position from "../../dataStructures/position/Position.js"
import getPlayer from "../listReducers/getPlayer.js"

export const dropCargo = (ore: Stator<number>) => objectList => {
  const oreCount = ore()
  if (oreCount < 1) return objectList
  const player = getPlayer(objectList)
  if (!player) return objectList

  ore(_ => 0)
  return objectList.concat(randomRotationCargo(Position.real(player.position), player.velocity, oreCount))
}