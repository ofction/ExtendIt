"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createExtendItString: () => createExtendItString
});
module.exports = __toCommonJS(src_exports);

// src/extends/String.ts
function createExtendItString(name, func) {
  String.prototype[name] = func;
}
createExtendItString("startFrom", function(num, options = {}) {
  if (options.noSpace)
    return this.slice(num - this.length || 0).noSpace();
  return this.slice(num - this.length || 0);
});
createExtendItString("noSpace", function() {
  return this.replace(/ +/g, "");
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createExtendItString
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9leHRlbmRzL1N0cmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gaW5kZXgudHNcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5kcy9TdHJpbmcnOyAvLyBJbXBvcnQgdGhlIGZpbGUgd2hlcmUgdGhlIGV4dGVuZGVkIG1ldGhvZHMgYXJlIGRlZmluZWRcbi8qXG5sZXQgdGV4dCA9ICdIZWxsbyBXb3JsZCc7XG5jb25zb2xlLmxvZyh0ZXh0LnN0YXJ0RnJvbSgxKSk7ICovLy8gT3V0cHV0OiBcImVsbG8gV29ybGRcIiAod2l0aG91dCBzcGFjZSkiLCAiLy8gZXh0ZW5kSXRTdHJpbmcudHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFeHRlbmRJdFN0cmluZyhuYW1lOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIChTdHJpbmcucHJvdG90eXBlIGFzIGFueSlbbmFtZV0gPSBmdW5jO1xufVxuXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnc3RhcnRGcm9tJywgZnVuY3Rpb24obnVtOiBudW1iZXIsIG9wdGlvbnM6IHsgbm9TcGFjZT86IGJvb2xlYW4gfSA9IHt9KTogc3RyaW5nIHtcbiAgaWYgKG9wdGlvbnMubm9TcGFjZSkgcmV0dXJuIHRoaXMuc2xpY2UobnVtIC0gdGhpcy5sZW5ndGggfHwgMCkubm9TcGFjZSgpO1xuICByZXR1cm4gdGhpcy5zbGljZShudW0gLSB0aGlzLmxlbmd0aCB8fCAwKTtcbn0pO1xuXG5jcmVhdGVFeHRlbmRJdFN0cmluZygnbm9TcGFjZScsIGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoLyArL2csICcnKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDTyxTQUFTLHFCQUFxQixNQUFjLE1BQXNCO0FBQ3ZFLEVBQUMsT0FBTyxVQUFrQixRQUFRO0FBQ3BDO0FBRUEscUJBQXFCLGFBQWEsU0FBUyxLQUFhLFVBQWlDLENBQUMsR0FBVztBQUNuRyxNQUFJLFFBQVE7QUFBUyxXQUFPLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxDQUFDLEVBQUUsUUFBUTtBQUN2RSxTQUFPLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxDQUFDO0FBQzFDLENBQUM7QUFFRCxxQkFBcUIsV0FBVyxXQUFtQjtBQUNqRCxTQUFPLEtBQUssUUFBUSxPQUFPLEVBQUU7QUFDL0IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
