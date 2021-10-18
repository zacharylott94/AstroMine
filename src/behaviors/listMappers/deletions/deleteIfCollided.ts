import and from "../../../hof/and"
import { conditional } from "../../../hof/conditional"
import { hasCollided, isOre, isProjectile, isDrone } from "../../../hof/conditions"
import mapper from "../../../hof/mapper"
import or from "../../../hof/or"
import flagForDeletion from "../../objectMappers/flagForDeletion"


export default mapper(conditional(and(hasCollided, [isOre, isProjectile, isDrone].reduce(or)), flagForDeletion))