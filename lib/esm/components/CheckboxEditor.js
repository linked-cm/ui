import React from 'react';
import { Checkbox } from '@_linked/primitives/components/Checkbox';
import style from './CheckboxEditor.module.css';
export const CheckboxEditor = ({ onCheckedChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }) => {
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
    return (React.createElement(React.Fragment, null, property.in ? (property.in.map((item, i) => {
        return (React.createElement("label", { className: style.Root },
            React.createElement(Checkbox, { value: of[property.label], onCheckedChange: onChangeHandler.bind(this, item), defaultChecked: currentValues.has(item), ...restProps }),
            "TODO: ",
            item.toString()));
    })) : (React.createElement("div", null, "checkbox usage unimplemented")
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
//# sourceMappingURL=CheckboxEditor.js.map