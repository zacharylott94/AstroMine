import Position from "../../dataStructures/position/Position.js"
import { conditional } from "../../hof/conditional.js"
import { hasClones } from "../../hof/conditions.js"

export default conditional(hasClones,
  (obj: any) => ({ ...obj, position: [Position.real(obj.position)] })
)