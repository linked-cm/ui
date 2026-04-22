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
exports.DateEditor = void 0;
var react_1 = __importDefault(require("react"));
var DateEditor = function (_a) {
    var onChange = _a.onChange, of = _a.of, property = _a.property, preConvertValueFn = _a.preConvertValueFn, postConvertValueFn = _a.postConvertValueFn, restProps = __rest(_a, ["onChange", "of", "property", "preConvertValueFn", "postConvertValueFn"]);
    var onChangeHandler = function (e) {
        if (onChange) {
            onChange(e);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null)
    // <Input
    //   onChange={onChangeHandler}
    //   defaultValue={
    //     of
    //       ? preConvertValueFn
    //         ? preConvertValueFn(of[property])
    //         : of[property]
    //       : ''
    //   }
    //   {...restProps}
    // />
    );
};
exports.DateEditor = DateEditor;
//# sourceMappingURL=DateEditor.js.map