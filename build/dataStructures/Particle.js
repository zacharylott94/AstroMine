import Vector from "./vector/Vector.js";
import wrapVector from "./vector/wrapVector.js";
const particleEquation = (position = [0, 0], velocity = [0, 0], acceleration, timeOffset, time) => {
    const relativeTime = time - timeOffset;
    return [
        position,
        Vector.scale(velocity, relativeTime),
        Vector.scale(acceleration(relativeTime), .5, relativeTime * relativeTime)
    ].reduce(Vector.add);
};
export const Particle = vectorWrap => (timeOffset, position, velocity, ttl = Number.MAX_SAFE_INTEGER, acceleration) => (time) => {
    if (time >= ttl + timeOffset)
        return Vector.INF;
    return wrapVector(vectorWrap, particleEquation(position, velocity, acceleration, timeOffset, time));
};
//# sourceMappingURL=Particle.js.map