import React from "react";
import {Spacing} from "@designsystem/foundation";

interface ColorProps {
  hexcode: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FunctionComponent<ColorProps> = ({
  hexcode,
  height = Spacing.lg,
  width = Spacing.lg,
}) => {
  const className = `dse-width-${width} dse-height-${height} `;
  return <div className={className} style={{ backgroundColor: hexcode }}></div>;
};

export default Color;
