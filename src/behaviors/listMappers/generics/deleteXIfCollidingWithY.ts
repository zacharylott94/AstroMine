import and from "../../../hof/and.js"
import { conditional } from "../../../hof/conditional.js"
import { hasCollidedWith, isObject } from "../../../hof/conditions.js"
import mapper from "../../../hof/mapper.js"
import flagForDeletion from "../../objectMappers/flagForDeletion.js"

export default (x: ObjectType, y: ObjectType) => mapper(
  conditional(
    and(
      isObject(x),
      hasCollidedWith(y)
    ),
    flagForDeletion
  ))