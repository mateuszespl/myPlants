import React from "react";

import constants from "config";
import Logo from "components/Logo";
import { StyledNavbar } from "./Navbar.styled";

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar
      className={constants.navbar.className}
      data-testid={constants.navbar.className}
    >
      <Logo />
    </StyledNavbar>
  );
};
