//conditional takes a function that returns a boolean and a function to conditionally execute

import fif from "./fif"
import id from "./identity"

export const conditional = <A, B>(condition: Condition<A>, success: (arg: A) => B) => fif(condition, success, id)