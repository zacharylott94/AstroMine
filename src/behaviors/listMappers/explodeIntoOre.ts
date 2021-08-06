import { randomRotationOre } from "../../dataStructures/Ore.js"
import Position from "../../dataStructures/position/Position.js"
import Vector from "../../dataStructures/vector/Vector.js"
import and from "../../hof/and.js"
import compose from "../../hof/compose.js"
import { conditional } from "../../hof/conditional.js"
import { hasCollidedWith, isCargo } from "../../hof/conditions.js"
import mapper from "../../hof/mapper.js"
import { randomInteger } from "../../libraries/random.js"

const dropOneOre = cargo => randomRotationOre(Position.real(cargo.position),
  [
    Vector.fromDegreesAndMagnitude(randomInteger(360),
      Vector.magnitude(cargo.velocity) / 3 + .1),
    cargo.velocity

  ].reduce(Vector.add)
)

const oreDropper = cargo => {
  let ores = new Array(cargo.count).fill(1).map(_ => dropOneOre(cargo))
  return ores
}

export default compose(
  mapper(
    conditional(
      and(isCargo, hasCollidedWith(ObjectType.Projectile)),
      oreDropper
    )
  ),
  list => list.flat()
)