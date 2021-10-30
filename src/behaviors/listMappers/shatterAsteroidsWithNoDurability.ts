import { shatter } from "../../dataStructures/Asteroid"
import { asteroidShatterSound } from "../../engine/sound"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { isAsteroidWithNoDurability } from "../../hof/conditions"
import mapper from "../../hof/mapper"

const shatterWithSound = compose(asteroidShatterSound, shatter)

export default compose(
  mapper(conditional(isAsteroidWithNoDurability, shatterWithSound)),
  list => list.flat()
)