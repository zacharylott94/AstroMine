import { isAsteroid, isOre, isPlayer, isProjectile, isDrone, isCargo } from "../hof/conditions.js"
import { circle } from "./graphics/circle.js"
import buildObjectRenderer from "./library/buildObjectRenderer.js"
import ngon from "./graphics/ngon.js"
import playerShipGraphic from "./graphics/playerShipGraphic.js"
import projectileGraphic from "./graphics/projectileGraphic.js"

export const asteroidRenderer = buildObjectRenderer(isAsteroid, circle)
export const oreRenderer = buildObjectRenderer(isOre, ngon(4))
export const playerRenderer = buildObjectRenderer(isPlayer, playerShipGraphic)
export const projectileRenderer = buildObjectRenderer(isProjectile, projectileGraphic)
export const droneRenderer = buildObjectRenderer(isDrone, ngon(6))
export const cargoRenderer = buildObjectRenderer(isCargo, ngon(5))