import add from "./add.js";
import distance from "./distance.js";
import distanceSquared from "./distanceSquared.js";
import dotProduct from "./dotProduct.js";
import magnitude from "./magnitude.js";
import normalize from "./normalize.js";
import squaredMagnitude from "./squaredMagnitude.js";
import subtract from "./subtract.js";
import radians from "./radians.js";
import degrees from "./degrees.js";
import scale from "./scale.js";
import fromDegreesAndMagnitude from "./fromDegreesAndMagnitude.js";
export default {
    fromComponents: (x, y) => [x, y],
    new: (x, y) => [x, y],
    fromDegreesAndMagnitude,
    add,
    subtract,
    scale,
    degrees,
    radians,
    normalize,
    magnitude,
    squaredMagnitude,
    distanceSquared,
    distance,
    dotProduct,
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
    ZERO: [0, 0],
    INF: [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    GAME_DIMENSIONS: [500, 500],
    CENTER_SCREEN: [250, 250]
};
//# sourceMappingURL=Vector.js.map