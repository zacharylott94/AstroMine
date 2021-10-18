import { randomRotationOre } from "../../dataStructures/Ore"
import Position from "../../dataStructures/position/Position"
import Vector from "../../dataStructures/vector/Vector"
import and from "../../hof/and"
import compose from "../../hof/compose"
import { conditional } from "../../hof/conditional"
import { isCargo, hasCollidedWith } from "../../hof/conditions"
import mapper from "../../hof/mapper"
import { randomInteger } from "../../libraries/random"


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