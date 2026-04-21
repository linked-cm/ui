"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextareaEditor = void 0;
const react_1 = __importDefault(require("react"));
const Textarea_1 = require("@_linked/primitives/components/Textarea");
const TextareaEditor = (_a) => {
    var { onChange, value, of, property, preConvertValueFn, postConvertValueFn, children, className } = _a, props = __rest(_a, ["onChange", "value", "of", "property", "preConvertValueFn", "postConvertValueFn", "children", "className"]);
    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (react_1.default.createElement(Textarea_1.Textarea, Object.assign({ onChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property])
                : of[property]
            : '', value: value }, props)));
};
exports.TextareaEditor = TextareaEditor;
//# sourceMappingURL=TextareaEditor.js.map