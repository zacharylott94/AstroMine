import X from "../../dataStructures/X.js"
import and from "../../hof/and.js"
import compose from "../../hof/compose.js"
import { conditional } from "../../hof/conditional.js"
import { isDrone } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"

const deletedDrone = and(isDrone, obj => obj.delete)

export default compose(
  mapper(conditional(deletedDrone, obj => [X(obj.position), obj])),
  list => list.flat()
)