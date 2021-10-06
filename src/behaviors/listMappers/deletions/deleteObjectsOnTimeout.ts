import and from "../../../hof/and.js"
import { conditional } from "../../../hof/conditional.js"
import { hasTimedOut, isType, isProjectile } from "../../../hof/conditions.js"
import mapper from "../../../hof/mapper.js"
import or from "../../../hof/or.js"
import flagForDeletion from "../../objectMappers/flagForDeletion.js"

const objects = [
  isProjectile,
  isType(ObjectType.X)
].reduce(or)

export default mapper(
  conditional(
    and(objects, hasTimedOut),
    flagForDeletion
  )
)