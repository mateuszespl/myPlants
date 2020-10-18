import React from "react";

import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {
  currentSlide: number;
}

export const Pagination: React.FC<PaginationInterface> = ({ currentSlide }) => {
  return (
    <StyledPagination>
      <p>{currentSlide} / 5</p>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
    </StyledPagination>
  );
};
