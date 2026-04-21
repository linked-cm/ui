import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
export interface DateEditorProps {
    onChange?: (e: any) => void;
    of?: Shape;
    property?: string;
    /**
     *  Converts the value returned by the shape, to the date string for the date field
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the date field to a value that can be provided to the set method of the shape
     * @param inputValue
     * @returns
     */
    postConvertValueFn?: (inputValue: string) => any;
}
export declare const DateEditor: ({ onChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }: DateEditorProps) => React.JSX.Element;
