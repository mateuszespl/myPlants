import React from "react";

import List from "components/List";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

interface MenuInterface {
  isMenuOpen: boolean;
  updateMenuStatus: () => void;
}

export const Menu: React.FC<MenuInterface> = ({
  isMenuOpen,
  updateMenuStatus,
}) => {
  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <List
        className="menu"
        listData={[
          <Link onClick={updateMenuStatus} to="category/plants">
            Plants
          </Link>,
          <Link onClick={updateMenuStatus} to="category/flowers">
            Flowers
          </Link>,
          <Link onClick={updateMenuStatus} to="category/accesories">
            Accesories
          </Link>,
          <Link onClick={updateMenuStatus} to="category/promo">
            Promo
          </Link>,
        ]}
      ></List>
    </StyledMenu>
  );
};
