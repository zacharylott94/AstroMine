import { conditional } from "../../../hof/conditional"
import { isOutsideofPlay } from "../../../hof/conditions"
import mapper from "../../../hof/mapper"
import flagForDeletion from "../../objectMappers/flagForDeletion"


export default mapper(conditional(isOutsideofPlay, flagForDeletion))