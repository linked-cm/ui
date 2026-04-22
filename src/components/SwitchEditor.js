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
exports.SwitchEditor = void 0;
var react_1 = __importDefault(require("react"));
var Switch_1 = require("@_linked/primitives/components/Switch");
var SwitchEditor = function (_a) {
    var onCheckedChange = _a.onCheckedChange, of = _a.of, property = _a.property, preConvertValueFn = _a.preConvertValueFn, postConvertValueFn = _a.postConvertValueFn, restProps = __rest(_a, ["onCheckedChange", "of", "property", "preConvertValueFn", "postConvertValueFn"]);
    var onChangeHandler = function (value) {
        console.log(value, 'value switch');
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log(of[property.label], 'of[property.label] switch');
        if (onCheckedChange) {
            onCheckedChange(value);
        }
    };
    return (react_1.default.createElement(Switch_1.Switch, __assign({ value: of[property.label], onCheckedChange: onChangeHandler, defaultChecked: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '' }, restProps)));
};
exports.SwitchEditor = SwitchEditor;
//# sourceMappingURL=SwitchEditor.js.map