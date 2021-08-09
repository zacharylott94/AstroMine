import { conditional } from "../../hof/conditional.js"
import { hasAcceleration } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"

export default mapper(conditional(hasAcceleration, (obj: any) => ({ ...obj, acceleration: 0 })))