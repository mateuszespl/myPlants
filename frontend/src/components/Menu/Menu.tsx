import React from "react";

import List from "components/List";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

export const Menu: React.FC = ({}) => {
  return (
    <StyledMenu>
      <List
        className="menu"
        listData={[
          <Link to="category/plants">Plants</Link>,
          <Link to="category/flowers">Flowers</Link>,
          <Link to="category/accesories">Accesories</Link>,
          <Link to="category/promo">Promo</Link>,
        ]}
      ></List>
    </StyledMenu>
  );
};
