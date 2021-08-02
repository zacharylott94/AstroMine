import Vector from "../vector/Vector.js";
export default function addVector(position, vector) {
    let newPosition = [
        ...position
    ];
    newPosition = newPosition.map(each => Vector.add(each, vector));
    return newPosition;
}
//# sourceMappingURL=addVector.js.map