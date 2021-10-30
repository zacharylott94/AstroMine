import and from "../../../hof/and"
import { conditional } from "../../../hof/conditional"
import { isType, hasCollidedWith } from "../../../hof/conditions"
import mapper from "../../../hof/mapper"
import or from "../../../hof/or"


export default <T>(x: Endofunctor<T>, y: ObjectType, ...zs: ObjectType[]) => mapper(
  conditional(
    and(
      isType(y),
      zs.map(hasCollidedWith).reduce(or)
    ),
    x
  ))