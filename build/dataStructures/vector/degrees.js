import mod from "../../libraries/mod.js";
import radians from "./radians.js";
export default (vector) => {
    const rad = radians(vector);
    return mod(rad * 360 / 2 / Math.PI, 360);
};
//# sourceMappingURL=degrees.js.map