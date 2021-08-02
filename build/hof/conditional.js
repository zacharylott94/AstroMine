export function conditional(condition, monoid) {
    return function (argument) {
        if (condition(argument))
            return monoid(argument);
        return argument;
    };
}
//# sourceMappingURL=conditional.js.map