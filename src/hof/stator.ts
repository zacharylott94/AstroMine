//stator wraps some state into a state object. 
//Calling the resulting function with another function mutates the state.
//Call the resulting function without a parameter to read the state
//PS, I called it "stator" because it sounds sorta like "state"
//But also, it kinda acts like the stator in a rotary system
//It stays put while the functions you pass to it move the parts


export const stator = <T>(state: T): Stator<T> => {
  // export function stator<T>(state: T): Stator<T> {
  const wrapper = { state }
  return function (endoFunctor?: Endofunctor<T>): T {
    if (endoFunctor !== undefined)
      wrapper.state = endoFunctor(wrapper.state)
    return wrapper.state
  }
}