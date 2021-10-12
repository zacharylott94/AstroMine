import passthrough from "./passthrough"

it('passthrough pass all args through a function', () => {
  const add2 = x => x + 2
  const doNothing = _ => { }

  expect(passthrough(doNothing)(2)).toBe(2)
  expect(passthrough(add2)(2)).toBe(2)

})