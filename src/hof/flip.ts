type BinaryFunction = (arg1, arg2) => any
type Flip = (func: BinaryFunction) => BinaryFunction
export const flip: Flip = func => (arg2, arg1) => func(arg1, arg2)