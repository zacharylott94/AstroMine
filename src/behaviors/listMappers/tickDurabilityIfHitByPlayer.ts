import { asteroidHitSound } from "../../engine/sound"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { hasCollidedWith } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import tickIfDurability from "./tickIfDurability"

const tickDurabilityWithSound = compose(asteroidHitSound, tickIfDurability)

export default mapper(conditional(hasCollidedWith(ObjectType.Projectile), tickDurabilityWithSound))