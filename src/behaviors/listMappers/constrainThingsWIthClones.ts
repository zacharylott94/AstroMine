import { conditional } from "../../hof/conditional.js"
import { hasClones } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import constrainObject from "../objectMappers/constrainObject.js"

export default mapper(conditional(hasClones, constrainObject))