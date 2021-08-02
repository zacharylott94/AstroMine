import { conditional } from "../../hof/conditional.js"
import { hasDurability } from "../../hof/conditions.js"
import tickDurability from "../objectMappers/tickDurability.js"

export default conditional(hasDurability, tickDurability)