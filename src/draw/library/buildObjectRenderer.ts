import { conditional } from "../../hof/conditional"
import mapper from "../../hof/mapper"
import { canvasContextScope } from "./canvasContextScope"
import Renderer from "./renderer"

export default (condition, draw) => {
  return mapper(conditional(condition, Renderer(canvasContextScope(draw))))
}