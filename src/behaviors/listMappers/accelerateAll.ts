import { conditional } from "../../hof/conditional.js"
import { hasAcceleration } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import accelerate from "../objectMappers/accelerate.js"

export default mapper(conditional(hasAcceleration, accelerate))