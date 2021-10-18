import { conditional } from "../../hof/conditional"
import { hasAcceleration } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import accelerate from "../objectMappers/accelerate"


export default mapper(conditional(hasAcceleration, accelerate))