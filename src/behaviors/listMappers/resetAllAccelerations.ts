import { conditional } from "../../hof/conditional.js"
import { hasAcceleration } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import { resetAcceleration } from "../objectMappers/setAcceleration.js"

export default mapper(conditional(hasAcceleration, resetAcceleration))