import React from 'react';
import { Textarea } from '@_linked/primitives/components/Textarea';
export const TextareaEditor = ({ onChange, value, of, property, preConvertValueFn, postConvertValueFn, children, className, ...props }) => {
    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (React.createElement(Textarea, { onChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property])
                : of[property]
            : '', value: value, ...props }));
};
//# sourceMappingURL=TextareaEditor.js.map