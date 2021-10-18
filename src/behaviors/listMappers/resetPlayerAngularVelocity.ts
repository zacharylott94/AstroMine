import { conditional } from "../../hof/conditional"
import { isPlayer } from "../../hof/conditions"
import mapper from "../../hof/mapper"


export default mapper(conditional(isPlayer, (player: Player) => ({ ...player, angularVelocity: 0 })))