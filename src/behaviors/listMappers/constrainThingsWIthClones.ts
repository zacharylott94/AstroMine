import { conditional } from "../../hof/conditional"
import { hasClones } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import constrainObject from "../objectMappers/constrainObject"


export default mapper(conditional(hasClones, constrainObject))