import and from "../../../hof/and.js"
import { conditional } from "../../../hof/conditional.js"
import { hasTimedOut, isProjectile } from "../../../hof/conditions.js"
import mapper from "../../../hof/mapper.js"
import flagForDeletion from "../../objectMappers/flagForDeletion.js"

export default mapper(
  conditional(
    and(isProjectile, hasTimedOut),
    flagForDeletion
  )
)