import Vector from "../vector/Vector.js";
import addVector from "./addVector.js";
export default function fromComponents(offsets, x, y) {
    return addVector(offsets, Vector.fromComponents(x, y));
}
//# sourceMappingURL=fromComponents.js.map