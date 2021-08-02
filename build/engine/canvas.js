import Vector from "../dataStructures/vector/Vector.js";
const element = document.getElementById("canvas");
element.width = Vector.GAME_DIMENSIONS[0];
element.height = Vector.GAME_DIMENSIONS[1];
export let context = element.getContext("2d");
context.translate(0.5, 0.5);
context.imageSmoothingEnabled = false;
context.fillColor = "black";
context.strokeStyle = "rgb(0,255,0)";
export const Canvas = {
    context
};
//# sourceMappingURL=canvas.js.map