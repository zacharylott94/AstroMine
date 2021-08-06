import and from "../hof/and.js"
import { hasCollidedWith, isCargo, isOre } from "../hof/conditions.js"

const add = (n, m) => n + m
const getCargoValue = (cargos) => {
  if (cargos.length < 1) return 0
  const cargoValue = cargos.filter(hasCollidedWith(ObjectType.Drone))
    .map(cargo => cargo.count)
    .reduce(add, 0)
  return cargoValue
}

const getOreValue = (ores) => ores.length || 0
export const addScoreSetup = objectList => score => {
  const cargos = objectList().filter(isCargo)
  const ores = objectList().filter(and(isOre, hasCollidedWith(ObjectType.Drone)))
  const cargoValue = getCargoValue(cargos)
  const oreValue = getOreValue(ores)
  return score + cargoValue + oreValue
}