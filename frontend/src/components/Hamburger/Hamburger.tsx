import React from "react";

import constants from "config";
import { StyledHamburger } from "./Hamburger.styled";

interface HamburgerInterface {
  isOpen: boolean;
}

export const Hamburger: React.FC<HamburgerInterface> = ({ isOpen }) => {
  return (
    <StyledHamburger
      className={constants.hamburger.className}
      data-testid={constants.hamburger.className}
      isOpen={isOpen}
    >
      <div>
        <p>
          {isOpen
            ? constants.hamburger.closeText
            : constants.hamburger.openText}
        </p>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburger>
  );
};
