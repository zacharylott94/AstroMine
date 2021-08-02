import Position from "../../dataStructures/position/Position.js";
export default function (obj) {
    return { ...obj, position: Position.addVector(obj.position, obj.velocity) };
}
//# sourceMappingURL=move.js.map