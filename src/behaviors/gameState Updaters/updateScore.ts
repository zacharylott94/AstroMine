import compose from "../../hof/compose.js"
import { addScoreSetup } from "../addScore.js"

export const updateScoreSetup = objectList => {
  return [
    addScoreSetup(objectList)
  ].reduce(compose)
}

export default updateScoreSetup
