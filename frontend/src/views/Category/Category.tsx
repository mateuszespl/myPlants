import React from "react";

import CategoryLayout from "layouts/CategoryLayout";
import ProductListing from "components/ProductListing";

interface CategoryInterface {
  match: { params: { category: string; subcategory: string } };
}

export const Category: React.FC<CategoryInterface> = ({ match }) => {
  const {
    params: { category, subcategory },
  } = match;
  return (
    <CategoryLayout>
      <ProductListing categories={{ category, subcategory }} />
    </CategoryLayout>
  );
};
