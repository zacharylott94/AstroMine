import { playerDeathSound } from "../../../engine/sound"
import compose from "../../../hof/compose"
import flagForDeletion from "../../objectMappers/flagForDeletion"
import doXIfYCollidingWithZ from "../generics/doXIfYCollidingWithZ"

const deleteWithSound = compose(playerDeathSound, flagForDeletion)

export default doXIfYCollidingWithZ(deleteWithSound, ObjectType.Player, ObjectType.Asteroid, ObjectType.Drone)