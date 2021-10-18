//functional if


export default <A, B, C>(condition: Condition<A>, success: (arg: A) => B, failure: (arg: A) => C) => {
  return (arg: A) => {
    if (condition(arg)) return success(arg)
    return failure(arg)
  }
}