import React, { useContext } from "react";

import { store } from "store";
import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {}

export const Pagination: React.FC = () => {
  const context = useContext(store);
  return (
    <StyledPagination>
      {console.log(context)}
      <p>1 / 5</p>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
    </StyledPagination>
  );
};
