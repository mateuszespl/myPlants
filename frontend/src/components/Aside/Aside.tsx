import React from "react";

import constants from "config";
import { StyledAside } from "./Aside.styled";

export const Aside: React.FC = () => {
  return (
    <StyledAside
      className={constants.aside.className}
      data-testid={constants.aside.className}
    ></StyledAside>
  );
};
