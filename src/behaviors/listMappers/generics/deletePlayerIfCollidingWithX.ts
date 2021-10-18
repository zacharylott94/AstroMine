import { partial } from "../../../hof/partial"
import deleteXIfCollidingWithY from "./deleteXIfCollidingWithY"


export default partial(deleteXIfCollidingWithY, ObjectType.Player)