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
exports.SelectEditor = void 0;
const react_1 = __importDefault(require("react"));
const Select_1 = require("@_linked/primitives/components/Select");
// interface RootSelectProps extend  {
//   of?: Shape;
//   property?: PropertyShape;
// }
// const RootSelect = () => {
//   return <Root></Root>;
// };
const SelectEditor = (_a) => {
    var { onValueChange, of, property, preConvertValueFn, postConvertValueFn } = _a, restProps = __rest(_a, ["onValueChange", "of", "property", "preConvertValueFn", "postConvertValueFn"]);
    const onChangeHandler = (value) => {
        console.log(value, 'value select');
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log(of[property.label], 'of[property.label] switch');
        if (onValueChange) {
            onValueChange(value);
        }
    };
    return (react_1.default.createElement(Select_1.Root, Object.assign({ value: of[property.label], onValueChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '' }, restProps)));
};
exports.SelectEditor = SelectEditor;
//# sourceMappingURL=SelectEditor.js.map