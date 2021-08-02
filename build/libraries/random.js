import Vector from "../dataStructures/vector/Vector.js";
export const randomAngle = (baseAngle, spread) => {
    let randomSpreadInDegrees = (Math.random() - .5) * spread;
    let randomAngleInDegrees = randomSpreadInDegrees + baseAngle;
    return randomAngleInDegrees;
};
export function randomDirectionVector(angle, spread) {
    return Vector.fromDegreesAndMagnitude(randomAngle(angle, spread), 1);
}
export const randomNumber = (max, min = 0) => min + Math.random() * (max - min);
export const randomInteger = (max, min = 0) => Math.floor(randomNumber(max + 1, min));
export const randomNumberGenerator = (min, max) => randomNumber(min, max);
//# sourceMappingURL=random.js.map