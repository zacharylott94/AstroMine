import { shatter } from "../../dataStructures/Asteroid"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { isAsteroidWithNoDurability } from "../../hof/conditions"
import mapper from "../../hof/mapper"


export default compose(
  mapper(conditional(isAsteroidWithNoDurability, (obj: Asteroid): any => shatter(obj))),
  list => list.flat()
)