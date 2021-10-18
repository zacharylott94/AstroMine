import Position from "../../dataStructures/position/Position"
import { conditional } from "../../hof/conditional"
import { hasClones } from "../../hof/conditions"

export default conditional(hasClones,
  (obj: any) => ({ ...obj, position: [Position.real(obj.position)] })
)