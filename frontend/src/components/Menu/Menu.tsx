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
          <Link to="/plants">Plants</Link>,
          <Link to="/flowers">Flowers</Link>,
          <Link to="/accesories">Accesories</Link>,
          <Link to="/promo">Promo</Link>,
        ]}
      ></List>
    </StyledMenu>
  );
};
