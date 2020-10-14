import React from "react";

import { StyledText } from "./Text.styled";

interface TextInterface {
  text: string;
  component: "p" | "h1" | "h2" | "h3";
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export const Text: React.FC<TextInterface> = ({
  text,
  component,
  fontSize,
  fontWeight,
  fontFamily,
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      as={component}
    >
      {text}
    </StyledText>
  );
};
