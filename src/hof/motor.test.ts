import motor from "./motor"
import { stator } from "./stator"
describe('motor', () => {
  it('Binds a stator to a function', () => {
    const inc = x => x + 1
    const num = stator(0)
    const boundInc = motor(num, inc)
    expect(num()).toBe(0)
    boundInc()
    expect(num()).toBe(1)
  })
})