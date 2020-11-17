import React from "react";

import CategoryLayout from "layouts/CategoryLayout";

interface CategoryInterface {
  match: { params: { category: string } };
}

export const Category: React.FC<CategoryInterface> = ({ match }) => {
  const {
    params: { category },
  } = match;
  return <CategoryLayout>Category route to {category}</CategoryLayout>;
};
