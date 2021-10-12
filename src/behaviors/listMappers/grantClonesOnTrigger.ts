import and from "../../hof/and.js"
import compose from "../../hof/compose.js"
import { conditional } from "../../hof/conditional.js"
import { hasClones, hasCollidedWith } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import not from "../../hof/not.js"
import grantClones from "../objectMappers/grantClones.js"

export default mapper(
  conditional(and(
    hasCollidedWith(ObjectType.CloneTrigger),
    compose(hasClones, not)
  ), grantClones
  ))