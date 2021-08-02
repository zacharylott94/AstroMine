import subtract from "./subtract.js";
import squaredMagnitude from "./squaredMagnitude.js";
export default (vector1, vector2) => {
    return squaredMagnitude(subtract(vector1, vector2));
};
//# sourceMappingURL=distanceSquared.js.map