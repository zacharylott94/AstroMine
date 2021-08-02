export default function fif(condition, success, failure) {
    return (...args) => {
        if (condition(...args))
            return success(...args);
        return failure(...args);
    };
}
//# sourceMappingURL=fif.js.map