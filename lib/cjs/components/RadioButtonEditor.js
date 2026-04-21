"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.RadioButtonEditor = void 0;
const react_1 = __importStar(require("react"));
const RadioGroup_1 = require("@_linked/primitives/components/RadioGroup");
const RadioButtonEditor_module_css_1 = __importDefault(require("./RadioButtonEditor.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const RadioButtonEditor = (_a) => {
    var { onValueChange, of, property, preConvertValueFn, postConvertValueFn, children, className } = _a, props = __rest(_a, ["onValueChange", "of", "property", "preConvertValueFn", "postConvertValueFn", "children", "className"]);
    const [labelHasLongString, setLabelHasLongString] = (0, react_1.useState)(false);
    const onChangeHandler = (newValue) => {
        if (!of)
            return;
        of[property.label] = newValue;
        if (onValueChange) {
            onValueChange(of[property.label]);
            // onValueChange(
            //   options.map((option) => {
            //     console.log(option, 'option');
            //     of[property.label] = newValue;
            //   }),
            // );
        }
    };
    (0, react_1.useEffect)(() => {
        //check if radio button label has a long string
        if (property.in) {
            const containsLongString = property.in.some((list) => {
                throw Error('TODO: property.in for RadioButtonEditor');
                // const wordCount = list.value.split(' ').length;
                // return wordCount > 5;
            });
            setLabelHasLongString(containsLongString);
        }
    }, [property.in]);
    // function cl(radioButtonField: any, arg1: any): string {
    //   throw new Error('Function not implemented.');
    // }
    console.log('of.label', of[property.label]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RadioGroup_1.RadioGroup.Root, { defaultValue: "default", "aria-label": "View density", className: (0, ClassNames_1.cl)(RadioButtonEditor_module_css_1.default.Root, labelHasLongString && RadioButtonEditor_module_css_1.default.columnBased) }, property.in ? (property.in.map((item) => (react_1.default.createElement("label", { className: RadioButtonEditor_module_css_1.default.radioButtonItem },
            react_1.default.createElement(RadioGroup_1.RadioGroup.Item, { value: item.toString(), className: RadioButtonEditor_module_css_1.default.radioButton }),
            "TODO: item from property.in")))) : (react_1.default.createElement("p", null, "unimplemented single radio button")))));
};
exports.RadioButtonEditor = RadioButtonEditor;
//# sourceMappingURL=RadioButtonEditor.js.map