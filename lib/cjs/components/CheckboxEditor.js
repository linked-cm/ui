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
exports.CheckboxEditor = void 0;
const react_1 = __importDefault(require("react"));
const Checkbox_1 = require("@_linked/primitives/components/Checkbox");
const CheckboxEditor_module_css_1 = __importDefault(require("./CheckboxEditor.module.css"));
const CheckboxEditor = (_a) => {
    var { onCheckedChange, of, property, preConvertValueFn, postConvertValueFn } = _a, restProps = __rest(_a, ["onCheckedChange", "of", "property", "preConvertValueFn", "postConvertValueFn"]);
    const currentValues = of[property.label];
    const onChangeHandler = (item, checked) => {
        if (!of)
            return;
        if (property.in) {
            if (checked) {
                currentValues.add(item);
            }
            else {
                currentValues.delete(item);
            }
        }
        else {
            of[property.label] = checked;
        }
        if (onCheckedChange) {
            onCheckedChange(currentValues);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, property.in ? (property.in.map((item, i) => {
        return (react_1.default.createElement("label", { className: CheckboxEditor_module_css_1.default.Root },
            react_1.default.createElement(Checkbox_1.Checkbox, Object.assign({ value: of[property.label], onCheckedChange: onChangeHandler.bind(this, item), defaultChecked: currentValues.has(item) }, restProps)),
            "TODO: ",
            item.toString()));
    })) : (react_1.default.createElement("div", null, "checkbox usage unimplemented")
    // <Checkbox
    //   value={of[property.label]}
    //   onCheckedChange={onChangeHandler}
    //   defaultChecked={
    //     of
    //       ? preConvertValueFn
    //         ? preConvertValueFn(of[property.label])
    //         : of[property.label]
    //       : ''
    //   }
    //   {...restProps}
    // />
    )));
};
exports.CheckboxEditor = CheckboxEditor;
//# sourceMappingURL=CheckboxEditor.js.map