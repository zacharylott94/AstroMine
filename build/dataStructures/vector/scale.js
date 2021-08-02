const [x, y] = [0, 1];
export default (vector, ...scalars) => {
    const scalar = scalars.reduce((acc, next) => { return acc * next; });
    return [vector[x] * scalar, vector[y] * scalar];
};
//# sourceMappingURL=scale.js.map