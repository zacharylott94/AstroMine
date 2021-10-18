import { context } from "../../engine/canvas"
export function canvasContextScope(func) {
  return function (...args) {
    context.save()
    func(...args)
    context.restore()
  }
}