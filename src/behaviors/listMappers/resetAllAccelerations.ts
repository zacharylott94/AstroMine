import { conditional } from "../../hof/conditional"
import { hasAcceleration } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import { resetAcceleration } from "../objectMappers/setAcceleration"


export default mapper(conditional(hasAcceleration, resetAcceleration))