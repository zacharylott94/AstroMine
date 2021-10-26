const Spawner = (locationGenerator, velocityGenerator, isObject, needMore, object) => difficulty => (objectList: GameObject[]): GameObject[] => {
  const objects = objectList.filter(isObject)
  if (needMore(difficulty, objects.length)) {
    const location = locationGenerator()
    const velocity = velocityGenerator(difficulty, location)
    return objectList.concat(object(location, velocity))
  }
  return objectList
}

export default Spawner
