import and from "../../hof/and.js"
import { conditional } from "../../hof/conditional.js"
import { hasClones, hasTimedOut, isOre } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import revokeClones from "../objectMappers/revokeClones.js"

export default mapper(
  conditional(
    [isOre,
      hasTimedOut,
      hasClones].reduce(and),
    revokeClones
  )
)