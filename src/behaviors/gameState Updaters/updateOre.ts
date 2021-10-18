import compose from "../../hof/compose"
import { addOreSetup } from "../addOre"


export const updateOreSetup = objectList => {
  return [
    addOreSetup(objectList)
  ].reduce(compose)
}