import React from "react";
import {Spacing} from "@designsystem/foundation";

interface ColorProps {
  hexcode: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FunctionComponent<ColorProps> = ({
  hexcode,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height} `;
  return <div className={className} style={{ backgroundColor: hexcode }}></div>;
};

export default Color;
