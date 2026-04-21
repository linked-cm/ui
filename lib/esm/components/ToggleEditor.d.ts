import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
import { PropertyShape } from '@_linked/core/shapes/SHACL';
export interface ToggleEditorProps {
    onPressedChange?: (e: any) => void;
    of?: Shape;
    property?: PropertyShape;
    children: React.ReactNode;
    /**
     *  Converts the value returned by the shape, to the input string for the toggle
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the toggle to a value that can be provided to the set method of the shape
     * @param inputValue
     * @returns
     */
    postConvertValueFn?: (inputValue: string) => any;
}
export declare const ToggleEditor: ({ onPressedChange, of, property, children, preConvertValueFn, postConvertValueFn, ...restProps }: ToggleEditorProps) => React.JSX.Element;
