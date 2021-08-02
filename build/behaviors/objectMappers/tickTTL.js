export default function tickTTL(obj) {
    const ttl = obj.ttl - 1;
    if (ttl < 1)
        return { ...obj, ttl, delete: true };
    return { ...obj, ttl, delete: false };
}
//# sourceMappingURL=tickTTL.js.map