import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
import { PropertyShape } from '@_linked/core/shapes/SHACL';
export interface CheckboxEditorProps {
    onCheckedChange?: (e: any) => void;
    of?: Shape;
    property?: PropertyShape;
    /**
     *  Converts the value returned by the shape, to the input string for the checkbox
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the checkbox to a value that can be provided to the set method of the shape
     * @param inputValue
     * @returns
     */
    postConvertValueFn?: (inputValue: string) => any;
}
export declare const CheckboxEditor: ({ onCheckedChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }: CheckboxEditorProps) => React.JSX.Element;
