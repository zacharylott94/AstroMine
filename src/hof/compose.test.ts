import compose from "./compose.js"
describe('compose', () => {
  it('takes two functions and composes them together', () => {
    const func1 = x => x + 1
    const func2 = x => x * -1
    const func3 = compose(func1, func2)
    expect(func3(0)).toBe(-1)
  })
  it('executes the functions in the right order', () => {
    const func1 = x => x + 1
    const func2 = x => x * -1
    const func3 = compose(func1, func2)
    const func4 = compose(func2, func1)
    expect(func3(0)).toBe(-1)
    expect(func4(0)).toBe(1)
  })
  it('can be used to reduce a list of functions', () => {
    const funcs = [
      x => x + 1,
      x => x * 2,
      x => x - 3,
      x => x * -1
    ]
    const boundFuncs = funcs.reduce(compose)
    expect(boundFuncs(0)).toBe(1)
  })
})