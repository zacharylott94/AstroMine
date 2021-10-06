//turns unit returning functions into identity functions with side effects
//example: renderer: T => () 
//passthrough(renderer): T => T

export default func => (...args) => { func(...args); return args }