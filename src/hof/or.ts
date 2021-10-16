export default <T>(c1: Condition<T>, c2: Condition<T>) => (obj: T) => c1(obj) || c2(obj)