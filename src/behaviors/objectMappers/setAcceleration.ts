import { partial } from "../../hof/partial.js"
const setAcceleration = (acceleration: number, obj: GameObject): GameObject => ({ ...obj, acceleration })
export const resetAcceleration = partial(setAcceleration, 0)