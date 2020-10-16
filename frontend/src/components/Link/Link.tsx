import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { StyledLink } from "./Link.styled";

interface LinkInterface {
  to: string;
  text: string;
}

export const Link: React.FC<LinkInterface> = ({ to, text }) => {
  return (
    <StyledLink>
      <RouterLink to={to}>{text}</RouterLink>
    </StyledLink>
  );
};
