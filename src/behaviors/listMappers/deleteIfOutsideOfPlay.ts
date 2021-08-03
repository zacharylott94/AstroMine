import { conditional } from "../../hof/conditional.js"
import { isOutsideofPlay } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import flagForDeletion from "../objectMappers/flagForDeletion.js"

export default mapper(conditional(isOutsideofPlay, flagForDeletion))