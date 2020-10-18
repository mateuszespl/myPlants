import React from "react";

import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {}

export const Pagination: React.FC = () => {
  return (
    <StyledPagination>
      <p>1 / 5</p>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
    </StyledPagination>
  );
};
