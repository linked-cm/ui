import React from 'react';
export const DateEditor = ({ onChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }) => {
    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (React.createElement(React.Fragment, null)
    // <Input
    //   onChange={onChangeHandler}
    //   defaultValue={
    //     of
    //       ? preConvertValueFn
    //         ? preConvertValueFn(of[property])
    //         : of[property]
    //       : ''
    //   }
    //   {...restProps}
    // />
    );
};
//# sourceMappingURL=DateEditor.js.map