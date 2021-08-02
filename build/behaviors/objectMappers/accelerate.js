import Vector from "../../dataStructures/vector/Vector.js";
export default function (obj) {
    return {
        ...obj,
        velocity: Vector.add(obj.velocity, Vector.fromDegreesAndMagnitude(obj.rotation, obj.acceleration))
    };
}
//# sourceMappingURL=accelerate.js.map