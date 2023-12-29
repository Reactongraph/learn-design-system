import React from "react";
import Spacing from "../../foundation/Spacing";
interface ColorProps {
    hexcode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: React.FunctionComponent<ColorProps>;
export default Color;
