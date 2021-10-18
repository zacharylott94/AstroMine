import and from "../../../hof/and"
import { conditional } from "../../../hof/conditional"
import { isProjectile, hasTimedOut } from "../../../hof/conditions"
import mapper from "../../../hof/mapper"
import or from "../../../hof/or"
import flagForDeletion from "../../objectMappers/flagForDeletion"


const objects = [
  isProjectile,
].reduce(or)

export default mapper(
  conditional(
    and(objects, hasTimedOut),
    flagForDeletion
  )
)