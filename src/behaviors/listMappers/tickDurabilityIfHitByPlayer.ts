import { conditional } from "../../hof/conditional.js"
import { hasCollidedWith } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import tickIfDurability from "./tickIfDurability.js"

export default mapper(conditional(hasCollidedWith(ObjectType.Projectile), tickIfDurability))