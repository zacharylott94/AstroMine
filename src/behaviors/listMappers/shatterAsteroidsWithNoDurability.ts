import { shatter } from "../../dataStructures/Asteroid.js"
import compose from "../../hof/compose.js"
import { conditional } from "../../hof/conditional.js"
import { isAsteroidWithNoDurability } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"

export default compose(
  mapper(conditional(isAsteroidWithNoDurability, (obj: Asteroid): any => shatter(obj))),
  list => list.flat()
)