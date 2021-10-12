import { conditional } from "../../hof/conditional.js"
import { isPlayer } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"

export default mapper(conditional(isPlayer, (player: Player) => ({ ...player, angularVelocity: 0 })))