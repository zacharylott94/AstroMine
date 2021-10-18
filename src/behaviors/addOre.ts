import getPlayer from "./listReducers/getPlayer"
import { countCollisions } from "./objectReducers.ts/countCollisions"


export const addOreSetup = (objectList: Stator<GameObject[]>) => (oreCount: number): number => {
  const player = getPlayer(objectList())
  if (!player) return oreCount
  const oreCollidedCount = countCollisions(ObjectType.Ore)(player)
  return oreCount + oreCollidedCount
}