import Position from "./position/Position.js";
export default function GenericFactory(location, velocity, radius, type = 3) {
    return {
        position: Position.fromVector(location),
        radius,
        velocity,
        type: type,
        delete: false,
    };
}
//# sourceMappingURL=genericObject.js.map