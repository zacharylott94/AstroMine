import { conditional } from "../../hof/conditional"
import { hasTTL } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import tickTTL from "../objectMappers/tickTTL"



const tickAllTTL = mapper(conditional(hasTTL, tickTTL))

export default tickAllTTL