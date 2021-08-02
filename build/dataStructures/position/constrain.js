import Vector from "../vector/Vector.js";
import wrapVector from "../vector/wrapVector.js";
import addVector from "./addVector.js";
import specificPositionVector from "./specificPositionVector.js";
export default (offsets, realPositionIndex) => (position) => {
    const realPosition = specificPositionVector(realPositionIndex)(position);
    let resultVector = wrapVector(Vector.GAME_DIMENSIONS, realPosition);
    return addVector(offsets, resultVector);
};
//# sourceMappingURL=constrain.js.map