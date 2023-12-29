import React from "react";
import {FontSize} from '@designsystem/foundation';

interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FunctionComponent<TextProps> = ({size = FontSize.base}) => {
  const className = `dse-width-${size}`;
  return <div className={className}></div>;
};

export default Text;
