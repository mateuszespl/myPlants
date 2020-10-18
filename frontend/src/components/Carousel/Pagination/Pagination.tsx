import React from "react";

import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {
  currentSlide: number;
  updateCarousel: (currentSlide: number) => void;
}

export const Pagination: React.FC<PaginationInterface> = ({
  currentSlide,
  updateCarousel,
}) => {
  return (
    <StyledPagination>
      {console.log(currentSlide)}
      <p onClick={() => updateCarousel(2)}>1 / 5</p>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
    </StyledPagination>
  );
};
