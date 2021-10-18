import { conditional } from "../../hof/conditional"
import { hasDurability } from "../../hof/conditions"
import tickDurability from "../objectMappers/tickDurability"


export default conditional(hasDurability, tickDurability)