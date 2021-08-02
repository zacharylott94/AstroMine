import Vector from "../vector/Vector.js";
export default function closestTo(position, point) {
    let closest = Vector.ZERO;
    let closestDistance = Number.MAX_SAFE_INTEGER;
    position.forEach(each => {
        const squaredDistance = Vector.distanceSquared(each, point);
        if (squaredDistance < closestDistance) {
            closestDistance = squaredDistance;
            closest = each;
        }
    });
    return closest;
}
//# sourceMappingURL=closestTo.js.map