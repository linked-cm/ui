import React from 'react';
import { Switch } from '@_linked/primitives/components/Switch';
export const SwitchEditor = ({ onCheckedChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }) => {
    const onChangeHandler = (value) => {
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
    return (React.createElement(Switch, { value: of[property.label], onCheckedChange: onChangeHandler, defaultChecked: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', ...restProps }));
};
//# sourceMappingURL=SwitchEditor.js.map