import React from 'react';
import { Root as Toggle } from '@_linked/primitives/components/Toggle';
export const ToggleEditor = ({ onPressedChange, of, property, children, preConvertValueFn, postConvertValueFn, ...restProps }) => {
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
    return (React.createElement(Toggle, { pressed: of[property.label], onPressedChange: onChangeHandler, defaultPressed: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', ...restProps }, children));
};
//# sourceMappingURL=ToggleEditor.js.map