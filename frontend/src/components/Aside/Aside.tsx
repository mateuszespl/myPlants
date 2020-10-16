import React from "react";

import constants from "config";
import { StyledAside } from "./Aside.styled";
import Pagination from "components/Carousel/Pagination";

export const Aside: React.FC = () => {
  return (
    <StyledAside
      className={constants.aside.className}
      data-testid={constants.aside.className}
    >
      {" "}
      <Pagination />
    </StyledAside>
  );
};
