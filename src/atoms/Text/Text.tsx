import React from "react";
import {FontSize} from '@designsystem/foundation';

interface TextProps {
  size?: keyof typeof FontSize;
  text?: string,
}

const Text: React.FunctionComponent<TextProps> = ({size = FontSize.base, text}) => {
  const className = `dse-text-${size}`;
  return <div className={className}>{text}</div>;
};

export default Text;
