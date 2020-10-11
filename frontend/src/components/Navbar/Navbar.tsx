import React from "react";

import constants from "config";
import Logo from "components/Logo";
import { StyledNavbar } from "./Navbar.styled";
import List from "components/List";

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar
      className={constants.navbar.className}
      data-testid={constants.navbar.className}
    >
      <Logo />
      <List
        className={constants.categoryList.className}
        listData={constants.categoryList.listData}
        height={constants.categoryList.height}
        margin={constants.categoryList.margin}
      />
      <List
        className={constants.socialList.className}
        listData={constants.socialList.listData}
        height={constants.socialList.height}
        margin={constants.socialList.margin}
      />
    </StyledNavbar>
  );
};
