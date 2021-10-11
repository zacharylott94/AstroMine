//turns unit returning functions into identity functions with side effects
//example: renderer: T => () 
//passthrough(renderer): T => T
//passthrough can only take single arguments

export default func => (arg) => {
  func(arg)
  return arg
}