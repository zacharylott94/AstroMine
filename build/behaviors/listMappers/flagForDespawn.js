import { conditional } from "../../hof/conditional.js";
import { hasCollidedWith } from "../../hof/conditions.js";
import mapper from "../../hof/mapper.js";
import flagForDeletion from "../objectMappers/flagForDeletion.js";
const flagForDespawn = mapper(conditional(hasCollidedWith(7), flagForDeletion));
export default flagForDespawn;
//# sourceMappingURL=flagForDespawn.js.map