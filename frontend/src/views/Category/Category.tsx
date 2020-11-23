import React from "react";

import CategoryLayout from "layouts/CategoryLayout";
import ProductListing from "components/ProductListing";

interface CategoryInterface {
  match: { params: { category: string } };
}

export const Category: React.FC<CategoryInterface> = ({ match }) => {
  const {
    params: { category },
  } = match;
  return (
    <CategoryLayout>
      <ProductListing />
    </CategoryLayout>
  );
};
