import React from "react";

import { StyledText } from "./Text.styled";

interface TextInterface {
  text: string;
}

export const Text: React.FC<TextInterface> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};
