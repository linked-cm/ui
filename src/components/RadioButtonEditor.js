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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButtonEditor = void 0;
var react_1 = __importStar(require("react"));
var RadioGroup_1 = require("@_linked/primitives/components/RadioGroup");
var RadioButtonEditor_module_css_1 = __importDefault(require("./RadioButtonEditor.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var RadioButtonEditor = function (_a) {
    var onValueChange = _a.onValueChange, of = _a.of, property = _a.property, preConvertValueFn = _a.preConvertValueFn, postConvertValueFn = _a.postConvertValueFn, children = _a.children, className = _a.className, props = __rest(_a, ["onValueChange", "of", "property", "preConvertValueFn", "postConvertValueFn", "children", "className"]);
    var _b = __read((0, react_1.useState)(false), 2), labelHasLongString = _b[0], setLabelHasLongString = _b[1];
    var onChangeHandler = function (newValue) {
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
    (0, react_1.useEffect)(function () {
        //check if radio button label has a long string
        if (property.in) {
            var containsLongString = property.in.some(function (list) {
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
        react_1.default.createElement(RadioGroup_1.RadioGroup.Root, { defaultValue: "default", "aria-label": "View density", className: (0, ClassNames_1.cl)(RadioButtonEditor_module_css_1.default.Root, labelHasLongString && RadioButtonEditor_module_css_1.default.columnBased) }, property.in ? (property.in.map(function (item) { return (react_1.default.createElement("label", { className: RadioButtonEditor_module_css_1.default.radioButtonItem },
            react_1.default.createElement(RadioGroup_1.RadioGroup.Item, { value: item.toString(), className: RadioButtonEditor_module_css_1.default.radioButton }),
            "TODO: item from property.in")); })) : (react_1.default.createElement("p", null, "unimplemented single radio button")))));
};
exports.RadioButtonEditor = RadioButtonEditor;
//# sourceMappingURL=RadioButtonEditor.js.map