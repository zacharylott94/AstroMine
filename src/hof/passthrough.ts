export default <T>(func: Functor<T, void>): Endofunctor<T> => (arg) => {
  func(arg)
  return arg
}