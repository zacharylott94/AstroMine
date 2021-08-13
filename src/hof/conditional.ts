//conditional takes a function that returns a boolean and a function to conditionally execute

import fif from "./fif.js"
import identity from "./identity.js"

export const conditional = (condition, success) => fif(condition, success, identity)