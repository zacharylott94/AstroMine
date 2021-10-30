import { partial } from "../../../hof/partial"
import flagForDeletion from "../../objectMappers/flagForDeletion"
import doXIfYCollidingWithZ from "./doXIfYCollidingWithZ"


export default partial(doXIfYCollidingWithZ, flagForDeletion)