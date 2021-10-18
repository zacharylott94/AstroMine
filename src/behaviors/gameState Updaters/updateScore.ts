import compose from "../../hof/compose"
import { addScoreSetup } from "../addScore"


export const updateScoreSetup = objectList => {
  return [
    addScoreSetup(objectList)
  ].reduce(compose)
}
