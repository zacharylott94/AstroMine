import Vector from "./vector/Vector.js";
const despawnTrigger = () => {
    return {
        radius: 900,
        position: [Vector.CENTER_SCREEN],
        type: 7,
        isCollidableWith: _obj => false,
        hasCollidedWith: []
    };
};
export default despawnTrigger;
//# sourceMappingURL=despawnTrigger.js.map