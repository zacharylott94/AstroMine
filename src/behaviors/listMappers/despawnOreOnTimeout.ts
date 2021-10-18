import and from "../../hof/and"
import { conditional } from "../../hof/conditional"
import { isOre, hasTimedOut, hasClones } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import revokeClones from "../objectMappers/revokeClones"


export default mapper(
  conditional(
    [isOre,
      hasTimedOut,
      hasClones].reduce(and),
    revokeClones
  )
)