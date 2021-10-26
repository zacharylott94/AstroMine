//This function takes a function that acts
//on a single item and turns it into a function that acts on a list

export default <A, B>(func: Functor<A, B>) => (list: Array<A>): Array<B> => list.map(func)
