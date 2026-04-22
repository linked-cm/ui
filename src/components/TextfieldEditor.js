"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importDefault(require("react"));
var Input_1 = require("@_linked/primitives/components/Input");
var TextfieldEditor = function (_a) {
    var onChange = _a.onChange, value = _a.value, of = _a.of, property = _a.property, valueProperty = _a.valueProperty, preConvertValueFn = _a.preConvertValueFn, postConvertValueFn = _a.postConvertValueFn, restProps = __rest(_a, ["onChange", "value", "of", "property", "valueProperty", "preConvertValueFn", "postConvertValueFn"]);
    var onBlur = function (e) {
        var value = e.currentTarget.value;
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log('of', of);
        console.log('value', value);
    };
    var onChangeHandler = function (e) {
        if (onChange) {
            onChange(e);
        }
    };
    return (react_1.default.createElement(Input_1.Input, __assign({ value: value, onChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', onBlur: onBlur }, restProps)));
};
exports.TextfieldEditor = TextfieldEditor;
//# sourceMappingURL=TextfieldEditor.js.map