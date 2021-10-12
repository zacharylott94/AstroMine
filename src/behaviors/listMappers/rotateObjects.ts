import { conditional } from "../../hof/conditional.js"
import { isRotatable } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import { rotate } from "../objectMappers/rotate.js"

export default mapper(conditional(isRotatable, rotate))