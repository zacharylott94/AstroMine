import { context } from "../engine/canvas.js";
export const circle = ([x, y], object) => {
    context.moveTo(x, y);
    context.beginPath();
    context.arc(x, y, object.radius, 0, 2 * Math.PI);
    context.stroke();
};
export const unitCircle = (vec) => circle(vec, { radius: 1 });
//# sourceMappingURL=circle.js.map