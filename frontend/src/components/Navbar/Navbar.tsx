import React from "react";

import constants from "config";
import Logo from "components/Logo";
import { StyledNavbar } from "./Navbar.styled";
import SocialMediaList from "components/SocialMediaList";
import Hamburger from "components/Hamburger";
import Menu from "components/Menu";

interface NavbarInterface {
  isMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarInterface> = ({ isMenuOpen }) => {
  return (
    <StyledNavbar
      className={constants.navbar.className}
      data-testid={constants.navbar.className}
      isMenuOpen={isMenuOpen}
    >
      <Logo />
      <Hamburger />
      <SocialMediaList />
    </StyledNavbar>
  );
};
