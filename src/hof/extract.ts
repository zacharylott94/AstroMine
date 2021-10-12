//extracts a given property from an object and returns that property or undefined
const extract = property => object => object[property]
export default extract
export const extractPosition = extract("position")