const limit = limit => array => {
  let newArray = Array.from(array)
  while (newArray.length > limit) newArray.pop()
  return newArray
}
//This function takes an item and a list and concatenates them
const concat = <T>(item: T, list: T[]) => list.concat(item)

const average = (list: number[]) => {
  return list.reduce((n, m) => n + m) / list.length
}

export default {
  limit,
  concat,
  average
}
