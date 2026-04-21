import React from 'react';
import { Input } from '@_linked/primitives/components/Input';
export const TextfieldEditor = ({ onChange, value, of, property, valueProperty, preConvertValueFn, postConvertValueFn, ...restProps }) => {
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
    return (React.createElement(Input, { value: value, onChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', onBlur: onBlur, ...restProps }));
};
//# sourceMappingURL=TextfieldEditor.js.map