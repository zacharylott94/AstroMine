import and from "../../../hof/and.js"
import { conditional } from "../../../hof/conditional.js"
import { hasCollidedWith, isType } from "../../../hof/conditions.js"
import mapper from "../../../hof/mapper.js"
import flagForDeletion from "../../objectMappers/flagForDeletion.js"

export default (x: ObjectType, y: ObjectType) => mapper(
  conditional(
    and(
      isType(x),
      hasCollidedWith(y)
    ),
    flagForDeletion
  ))