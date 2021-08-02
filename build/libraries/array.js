const limit = limit => array => {
    let newArray = Array.from(array);
    while (newArray.length > limit)
        newArray.pop();
    return newArray;
};
const concat = (item, list) => list.concat(item);
export default {
    limit,
    concat,
};
//# sourceMappingURL=array.js.map