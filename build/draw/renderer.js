export default function Renderer(renderfunction) {
    return function (object) {
        object.position.forEach(each => renderfunction(each, object));
        return object;
    };
}
//# sourceMappingURL=renderer.js.map