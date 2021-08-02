import constrain from "./constrain.js";
import Vector from "../vector/Vector.js";
import closestTo from "./closestTo.js";
import specificPositionVector from "./specificPositionVector.js";
import addVector from "./addVector.js";
import fromComponents from "./fromComponents.js";
import { partial } from "../../hof/partial.js";
var EPosition;
(function (EPosition) {
    EPosition[EPosition["real"] = 0] = "real";
    EPosition[EPosition["topLeft"] = 1] = "topLeft";
    EPosition[EPosition["top"] = 2] = "top";
    EPosition[EPosition["topRight"] = 3] = "topRight";
    EPosition[EPosition["left"] = 4] = "left";
    EPosition[EPosition["right"] = 5] = "right";
    EPosition[EPosition["bottomLeft"] = 6] = "bottomLeft";
    EPosition[EPosition["bottom"] = 7] = "bottom";
    EPosition[EPosition["bottomRight"] = 8] = "bottomRight";
})(EPosition || (EPosition = {}));
const offsets = [
    Vector.fromComponents(0, 0),
    Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], -Vector.GAME_DIMENSIONS[1]),
    Vector.fromComponents(0, -Vector.GAME_DIMENSIONS[1]),
    Vector.fromComponents(Vector.GAME_DIMENSIONS[0], -Vector.GAME_DIMENSIONS[1]),
    Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], 0),
    Vector.fromComponents(Vector.GAME_DIMENSIONS[0], 0),
    Vector.fromComponents(-Vector.GAME_DIMENSIONS[0], Vector.GAME_DIMENSIONS[1]),
    Vector.fromComponents(0, Vector.GAME_DIMENSIONS[1]),
    Vector.fromComponents(Vector.GAME_DIMENSIONS[0], Vector.GAME_DIMENSIONS[1]),
];
export default {
    fromVector: partial(addVector, offsets),
    fromComponents: (x, y) => fromComponents(offsets, x, y),
    addVector,
    real: specificPositionVector(EPosition.real),
    closestTo,
    constrain: constrain(offsets, EPosition.real),
};
//# sourceMappingURL=Position.js.map