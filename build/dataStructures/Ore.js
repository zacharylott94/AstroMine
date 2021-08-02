import { isPlayer } from "../hof/conditions.js";
import GenericFactory from "./genericObject.js";
const radius = 3;
const Ore = (location, velocity) => ({
    ...GenericFactory(location, velocity, radius, 5),
    hasCollidedWith: [],
    isCollidableWith: isPlayer,
    rotation: 0,
    angularVelocity: 2
});
export default Ore;
//# sourceMappingURL=Ore.js.map