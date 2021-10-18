import { conditional } from "../../hof/conditional"
import { isMoveable } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import move from "../objectMappers/move"



const moveAllMoveable = mapper(conditional(isMoveable, move))
export default moveAllMoveable