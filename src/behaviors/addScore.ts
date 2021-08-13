import and from "../hof/and.js"
import { hasCollidedWith, isCargo, isOre } from "../hof/conditions.js"

const add = (n, m): number => n + m
const getCargoValue = (cargos: Cargo[]): number => {
  if (cargos.length < 1) return 0
  const cargoValue = cargos.filter(hasCollidedWith(ObjectType.Drone))
    .map(cargo => cargo.count)
    .reduce(add, 0)
  return cargoValue
}

const getOreValue = (ores: Ore[]): number => ores.length || 0
export const addScoreSetup = (objectList: Stator<GameObject[]>) => (score: number): number => {
  const cargos = objectList().filter(isCargo) as Cargo[]
  const ores = objectList().filter(and(isOre, hasCollidedWith(ObjectType.Drone))) as Ore[]
  const cargoValue = getCargoValue(cargos)
  const oreValue = getOreValue(ores)
  return score + cargoValue + oreValue
}