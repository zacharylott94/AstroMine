import { context } from "../engine/canvas.js";
export const rotate = ([x, y], rotation) => {
    context.translate(x, y);
    context.rotate(Math.PI * 2 / 360 * rotation);
    context.translate(-x, -y);
};
//# sourceMappingURL=rotate.js.map