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
exports.ToggleEditor = void 0;
const react_1 = __importDefault(require("react"));
const Toggle_1 = require("@_linked/primitives/components/Toggle");
const ToggleEditor = (_a) => {
    var { onPressedChange, of, property, children, preConvertValueFn, postConvertValueFn } = _a, restProps = __rest(_a, ["onPressedChange", "of", "property", "children", "preConvertValueFn", "postConvertValueFn"]);
    const onChangeHandler = (value) => {
        console.log(value, 'value toggle');
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log(of[property.label], 'of[property.label] toggle');
        if (onPressedChange) {
            onPressedChange(value);
        }
    };
    return (react_1.default.createElement(Toggle_1.Root, Object.assign({ pressed: of[property.label], onPressedChange: onChangeHandler, defaultPressed: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '' }, restProps), children));
};
exports.ToggleEditor = ToggleEditor;
//# sourceMappingURL=ToggleEditor.js.map