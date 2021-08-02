import Vector from "./vector/Vector.js";
const wrapTrigger = () => {
    return {
        radius: 100,
        position: [Vector.CENTER_SCREEN],
        type: 6,
        isCollidableWith: _obj => false,
        hasCollidedWith: []
    };
};
export default wrapTrigger;
//# sourceMappingURL=wrapTrigger.js.map