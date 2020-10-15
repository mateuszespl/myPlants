import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { StyledLink } from "./Link.styled";

interface LinkInterface {
  to: string;
}

export const Link: React.FC<LinkInterface> = ({ to }) => {
  return (
    <StyledLink>
      <RouterLink to={to} />
    </StyledLink>
  );
};
