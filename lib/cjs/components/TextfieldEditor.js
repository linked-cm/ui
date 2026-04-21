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
exports.TextfieldEditor = void 0;
const react_1 = __importDefault(require("react"));
const Input_1 = require("@_linked/primitives/components/Input");
const TextfieldEditor = (_a) => {
    var { onChange, value, of, property, valueProperty, preConvertValueFn, postConvertValueFn } = _a, restProps = __rest(_a, ["onChange", "value", "of", "property", "valueProperty", "preConvertValueFn", "postConvertValueFn"]);
    const onBlur = (e) => {
        let value = e.currentTarget.value;
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log('of', of);
        console.log('value', value);
    };
    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (react_1.default.createElement(Input_1.Input, Object.assign({ value: value, onChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', onBlur: onBlur }, restProps)));
};
exports.TextfieldEditor = TextfieldEditor;
//# sourceMappingURL=TextfieldEditor.js.map