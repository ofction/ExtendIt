// extendItString.ts
export function createExtendItString(name, func) {
    String.prototype[name] = func;
}
createExtendItString('startFrom', function (num, options = {}) {
    if (options.noSpace)
        return this.slice(num - this.length || 0).noSpace();
    return this.slice(num - this.length || 0);
});
createExtendItString('noSpace', function () {
    return this.replace(/ +/g, '');
});
//# sourceMappingURL=String.js.map