import React from "react";

import constants from "config";
import { StyledLogo } from "./Logo.styled";

export const Logo: React.FC = () => {
  return (
    <StyledLogo
      className={constants.logo.className}
      data-testid={constants.logo.className}
    >
      <header>
        <a href="/"></a>
      </header>
    </StyledLogo>
  );
};
