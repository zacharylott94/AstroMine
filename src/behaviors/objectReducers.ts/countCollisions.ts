type T = (objectType: ObjectType) => (obj: GameObject) => number
export const countCollisions: T = objectType => obj => obj.hasCollidedWith.filter(type => type === objectType).length