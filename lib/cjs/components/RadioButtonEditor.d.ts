import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
import { PropertyShape } from '@_linked/core/shapes/SHACL';
export interface RadioButtonProps {
    onValueChange?: (newValue: any) => void;
    of?: Shape;
    property?: PropertyShape;
    children?: React.ReactNode;
    className?: string;
    /**
     *  Converts the value returned by the shape, to the radio input string for the radio input
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the radio input to a value that can be provided to the set method of the shape
     * @param radioInputValue
     * @returns
     */
    postConvertValueFn?: (radioInputValue: string) => any;
}
export declare const RadioButtonEditor: React.FC<RadioButtonProps>;
