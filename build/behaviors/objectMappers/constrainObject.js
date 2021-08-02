import Position from "../../dataStructures/position/Position.js";
export default function (obj) {
    return { ...obj, position: Position.constrain(obj.position) };
}
//# sourceMappingURL=constrainObject.js.map