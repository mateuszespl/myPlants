import React from "react";

import constants from "config";
import { StyledHamburger } from "./Hamburger.styled";

interface HamburgerInterface {
  isMenuOpen: boolean;
  updateMenuStatus: () => void;
}

export const Hamburger: React.FC<HamburgerInterface> = ({
  isMenuOpen,
  updateMenuStatus,
}) => {
  return (
    <StyledHamburger
      className={constants.hamburger.className}
      data-testid={constants.hamburger.className}
      isMenuOpen={isMenuOpen}
    >
      <div onClick={updateMenuStatus}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburger>
  );
};
