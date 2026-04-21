import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
export interface TextareaEditorProps {
    onChange?: (e: any) => void;
    value?: string[];
    of?: Shape;
    property?: string;
    children?: any;
    className?: any;
    /**
     *  Converts the value returned by the shape, to the text area string for the text area
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the text area to a value that can be provided to the set method of the shape
     * @param textAreaValue
     * @returns
     */
    postConvertValueFn?: (textAreaValue: string) => any;
}
export declare const TextareaEditor: ({ onChange, value, of, property, preConvertValueFn, postConvertValueFn, children, className, ...props }: TextareaEditorProps) => React.JSX.Element;
