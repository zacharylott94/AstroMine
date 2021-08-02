import Position from "../dataStructures/position/Position.js";
import { checkCollision } from "./Collision.js";
describe('checkCollision', () => {
    it('Compares two objects and returns the first object with a true hasCollided property if the object overlap', () => {
        let object = {
            position: Position.fromComponents(0, 0),
            radius: 25,
            hasCollidedWith: [],
            isCollidableWith: _obj => true,
            type: 3
        };
        let object2 = { ...object };
        expect(checkCollision(object, object2)).toStrictEqual({ ...object, hasCollidedWith: [3] });
        expect(checkCollision(object, object)).toStrictEqual(object);
        object2 = { ...object, position: Position.fromComponents(35.355, 35.355) };
        expect(checkCollision(object, object2)).toStrictEqual({ ...object, hasCollidedWith: [3] });
        object2 = { ...object, position: Position.fromComponents(36, 36) };
        expect(checkCollision(object, object2)).toStrictEqual({ ...object });
    });
});
//# sourceMappingURL=Collision.test.js.map