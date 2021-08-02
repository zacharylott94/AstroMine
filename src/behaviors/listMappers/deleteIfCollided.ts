import and from "../../hof/and.js"
import { conditional } from "../../hof/conditional.js"
import { hasCollided, isOre, isProjectile } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import or from "../../hof/or.js"
import flagForDeletion from "../objectMappers/flagForDeletion.js"

export default mapper(conditional(and(hasCollided, or(isOre, isProjectile)), flagForDeletion))