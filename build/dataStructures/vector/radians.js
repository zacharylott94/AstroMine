import normalize from "./normalize.js";
const [x, y] = [0, 1];
export default (vector) => {
    return Math.atan2(normalize(vector)[y], normalize(vector)[x]);
};
//# sourceMappingURL=radians.js.map