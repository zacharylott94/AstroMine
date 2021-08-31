
const X = (position: TPosition): X => ({
  position,
  ttl: 200,
  type: ObjectType.X,
  isCollidableWith: () => false,
  hasCollidedWith: [],
  radius: 0
})
export default X