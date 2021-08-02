export const stator = (state) => {
    const wrapper = { state };
    return function (monoid) {
        if (monoid !== undefined)
            wrapper.state = monoid(wrapper.state);
        return wrapper.state;
    };
};
//# sourceMappingURL=stator.js.map