import { hasCollidedWith, isCargo } from "../hof/conditions.js"

export const addScoreSetup = objectList => score => {
  const cargos = objectList().filter(isCargo)
  if (cargos.length < 1) return score
  const cargoValue = cargos.filter(hasCollidedWith(ObjectType.Drone))
    .map(cargo => cargo.count)
    .reduce((n, m) => n + m, 0)
  return score + cargoValue
}