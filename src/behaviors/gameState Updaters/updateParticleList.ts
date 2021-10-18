import { particleGeneratorSetup } from "../../engine/ParticleEmitters"
import compose from "../../hof/compose"
import array from "../../libraries/array"


const isNotTimedOut = timer => particle => {
  if (particle(timer())[0] === Number.POSITIVE_INFINITY) return false
  return true
}

const filterTimedOut = timer => list => list.filter(isNotTimedOut(timer))
const limit = array.limit(1000)

export default function particleListUpdaterSetup(objectList, timer) {
  return [
    particleGeneratorSetup(objectList, timer),
    filterTimedOut(timer),
    limit,
  ].reduce(compose)
}