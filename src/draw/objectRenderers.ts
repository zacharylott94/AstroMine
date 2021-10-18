import { isAsteroid, isOre, isPlayer, isProjectile, isDrone, isCargo } from "../hof/conditions"
import { circle } from "./graphics/circle"
import buildObjectRenderer from "./library/buildObjectRenderer"
import ngon from "./graphics/ngon"
import playerShipGraphic from "./graphics/playerShipGraphic"
import projectileGraphic from "./graphics/projectileGraphic"

export const asteroidRenderer = buildObjectRenderer(isAsteroid, circle)
export const oreRenderer = buildObjectRenderer(isOre, ngon(4))
export const playerRenderer = buildObjectRenderer(isPlayer, playerShipGraphic)
export const projectileRenderer = buildObjectRenderer(isProjectile, projectileGraphic)
export const droneRenderer = buildObjectRenderer(isDrone, ngon(6))
export const cargoRenderer = buildObjectRenderer(isCargo, ngon(5))