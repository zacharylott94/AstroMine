import and from "../../../hof/and.js"
import { conditional } from "../../../hof/conditional.js"
import { hasCollided, isDrone, isOre, isProjectile } from "../../../hof/conditions.js"
import mapper from "../../../hof/mapper.js"
import or from "../../../hof/or.js"
import flagForDeletion from "../../objectMappers/flagForDeletion.js"

export default mapper(conditional(and(hasCollided, [isOre, isProjectile, isDrone].reduce(or)), flagForDeletion))