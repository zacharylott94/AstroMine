import { cargoPickupSound } from "../../../engine/sound"
import compose from "../../../hof/compose"
import flagForDeletion from "../../objectMappers/flagForDeletion"
import doXIfYCollidingWithZ from "../generics/doXIfYCollidingWithZ"

const deleteWithSound = compose(cargoPickupSound, flagForDeletion)

export default doXIfYCollidingWithZ(deleteWithSound, ObjectType.Ore, ObjectType.Drone)