export default (degrees, magnitude) => {
    const angle = Math.PI * 2 / 360 * degrees;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    return [x * magnitude, y * magnitude];
};
//# sourceMappingURL=fromDegreesAndMagnitude.js.map