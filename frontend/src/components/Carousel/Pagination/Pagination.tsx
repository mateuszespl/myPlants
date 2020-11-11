import React from "react";

import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {
  currentSlide: number;
}

export const Pagination: React.FC<PaginationInterface> = ({ currentSlide }) => {
  return (
    <StyledPagination currentSlide={currentSlide}>
      <p>{currentSlide} / 4</p>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
    </StyledPagination>
  );
};
