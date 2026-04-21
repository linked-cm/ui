import React from 'react';
import { Root, } from '@_linked/primitives/components/Select';
// interface RootSelectProps extend  {
//   of?: Shape;
//   property?: PropertyShape;
// }
// const RootSelect = () => {
//   return <Root></Root>;
// };
export const SelectEditor = ({ onValueChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }) => {
    const onChangeHandler = (value) => {
        console.log(value, 'value select');
        if (!of)
            return;
        if (postConvertValueFn) {
            value = postConvertValueFn(value);
        }
        of[property.label] = value;
        console.log(of[property.label], 'of[property.label] switch');
        if (onValueChange) {
            onValueChange(value);
        }
    };
    return (React.createElement(Root, { value: of[property.label], onValueChange: onChangeHandler, defaultValue: of
            ? preConvertValueFn
                ? preConvertValueFn(of[property.label])
                : of[property.label]
            : '', ...restProps }));
};
//# sourceMappingURL=SelectEditor.js.map