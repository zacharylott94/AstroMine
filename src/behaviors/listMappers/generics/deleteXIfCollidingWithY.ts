import and from "../../../hof/and"
import { conditional } from "../../../hof/conditional"
import { isType, hasCollidedWith } from "../../../hof/conditions"
import mapper from "../../../hof/mapper"
import flagForDeletion from "../../objectMappers/flagForDeletion"


export default (x: ObjectType, y: ObjectType) => mapper(
  conditional(
    and(
      isType(x),
      hasCollidedWith(y)
    ),
    flagForDeletion
  ))