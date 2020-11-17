import React from "react";

import { StyledCategoryLayout } from "./CategoryLayout.styled";

interface CategoryLayoutInterface {}

export const CategoryLayout: React.FC<CategoryLayoutInterface> = ({
  children,
}) => {
  return (
    <StyledCategoryLayout>
      <section className="content">{children}</section>
    </StyledCategoryLayout>
  );
};
