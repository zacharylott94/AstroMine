import { conditional } from "../../hof/conditional"
import { hasCollidedWith } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import tickIfDurability from "./tickIfDurability"


export default mapper(conditional(hasCollidedWith(ObjectType.Projectile), tickIfDurability))