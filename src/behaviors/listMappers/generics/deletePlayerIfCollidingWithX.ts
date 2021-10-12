import { partial } from "../../../hof/partial.js"
import deleteXIfCollidingWithY from "./deleteXIfCollidingWithY.js"

export default partial(deleteXIfCollidingWithY, ObjectType.Player)