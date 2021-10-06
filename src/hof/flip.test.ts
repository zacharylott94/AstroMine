import { flip } from "./flip"

it('Flip swaps two arguments', () => {
  const sub = (arg1, arg2) => arg1 - arg2
  const flippedSub = flip(sub)
  expect(flippedSub(2, 1)).toBe(-1)
})