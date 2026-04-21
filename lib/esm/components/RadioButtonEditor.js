import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@_linked/primitives/components/RadioGroup';
import styles from './RadioButtonEditor.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
export const RadioButtonEditor = ({ onValueChange, of, property, preConvertValueFn, postConvertValueFn, children, className, ...props }) => {
    const [labelHasLongString, setLabelHasLongString] = useState(false);
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
    useEffect(() => {
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
    return (React.createElement(React.Fragment, null,
        React.createElement(RadioGroup.Root, { defaultValue: "default", "aria-label": "View density", className: cl(styles.Root, labelHasLongString && styles.columnBased) }, property.in ? (property.in.map((item) => (React.createElement("label", { className: styles.radioButtonItem },
            React.createElement(RadioGroup.Item, { value: item.toString(), className: styles.radioButton }),
            "TODO: item from property.in")))) : (React.createElement("p", null, "unimplemented single radio button")))));
};
//# sourceMappingURL=RadioButtonEditor.js.map