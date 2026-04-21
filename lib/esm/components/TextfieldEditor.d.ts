import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
import { InputProps } from '@_linked/primitives/components/Input';
export interface TextfieldProps extends InputProps {
    onChange?: (e: any) => void;
    value?: number | string;
    helperText?: string;
    of: Shape;
    valueProperty?: string;
    property?: any;
    /**
     *  Converts the value returned by the shape, to the input string for the input field
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the input field to a value that can be provided to the set method of the shape
     * @param inputValue
     * @returns
     */
    postConvertValueFn?: (inputValue: string) => any;
}
export declare const TextfieldEditor: ({ onChange, value, of, property, valueProperty, preConvertValueFn, postConvertValueFn, ...restProps }: TextfieldProps) => React.JSX.Element;
