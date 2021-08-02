import and from "../../hof/and.js";
import { conditional } from "../../hof/conditional.js";
import { isPlayer } from "../../hof/conditions.js";
import mapper from "../../hof/mapper.js";
import flagForDeletion from "../objectMappers/flagForDeletion.js";
export default mapper(conditional(and(isPlayer, player => player.hasCollidedWith.filter(type => type === 0).length > 0), flagForDeletion));
//# sourceMappingURL=deleteIfPlayerCollidingWithAsteroid.js.map