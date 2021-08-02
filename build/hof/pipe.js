export const pipe = (value, funcs) => {
    return funcs.reduce((val, func) => func(val), value);
};
//# sourceMappingURL=pipe.js.map