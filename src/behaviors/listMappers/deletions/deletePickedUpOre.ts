import { orePickupSound } from "../../../engine/sound"
import compose from "../../../hof/compose"
import flagForDeletion from "../../objectMappers/flagForDeletion"
import doXIfYCollidingWithZ from "../generics/doXIfYCollidingWithZ"

const deleteWithSound = compose(orePickupSound, flagForDeletion)

export default doXIfYCollidingWithZ(deleteWithSound, ObjectType.Ore, ObjectType.Player)