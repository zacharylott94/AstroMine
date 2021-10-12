import { conditional } from "../../hof/conditional.js"
import mapper from "../../hof/mapper.js"
import { canvasContextScope } from "./canvasContextScope.js"
import Renderer from "./renderer.js"

export default (condition, draw) => {
  return mapper(conditional(condition, Renderer(canvasContextScope(draw))))
}