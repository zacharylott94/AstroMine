import { conditional } from "../../hof/conditional"
import { isRotatable } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import { rotate } from "../objectMappers/rotate"


export default mapper(conditional(isRotatable, rotate))