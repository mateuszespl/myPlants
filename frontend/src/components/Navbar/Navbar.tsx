import React from "react";

import constants from "config";
import Logo from "components/Logo";
import { StyledNavbar } from "./Navbar.styled";
import List from "components/List";
import SocialMediaList from "components/SocialMediaList";
import Text from "components/Text";

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar
      className={constants.navbar.className}
      data-testid={constants.navbar.className}
    >
      <Logo />
      <List
        className={constants.categoryList.className}
        listData={[
          <Text text="Plants" component="h3" />,
          <Text text="Pre Potted Plants" component="h3" />,
          <Text text="Accesories" component="h3" />,
        ]}
        height={constants.categoryList.height}
        margin={constants.categoryList.margin}
      />
      <SocialMediaList />
    </StyledNavbar>
  );
};
