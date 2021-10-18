import and from "../../hof/and"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { hasCollidedWith, hasClones } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import not from "../../hof/not"
import grantClones from "../objectMappers/grantClones"


export default mapper(
  conditional(and(
    hasCollidedWith(ObjectType.CloneTrigger),
    compose(hasClones, not)
  ), grantClones
  ))