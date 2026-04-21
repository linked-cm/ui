import React from 'react';
import { Shape } from '@_linked/core/shapes/Shape';
import { PropertyDetails } from '@_linked/server/utils/Shapes';
export interface SwitchEditorProps {
    onCheckedChange?: (e: any) => void;
    of?: Shape;
    property?: PropertyDetails;
    /**
     *  Converts the value returned by the shape, to the input string for the switch
     * @param shapePropertyValue
     * @returns
     */
    preConvertValueFn?: (shapePropertyValue: any) => string;
    /**
     * Converts the value of the switch to a value that can be provided to the set method of the shape
     * @param inputValue
     * @returns
     */
    postConvertValueFn?: (inputValue: string) => any;
}
export declare const SwitchEditor: ({ onCheckedChange, of, property, preConvertValueFn, postConvertValueFn, ...restProps }: SwitchEditorProps) => React.JSX.Element;
