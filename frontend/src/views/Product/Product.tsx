import React from "react";

import ProductLayout from "layouts/ProductLayout";

interface ProductInterface {
  match: { params: { id: number } };
}

export const Product: React.FC<ProductInterface> = ({ match }) => {
  const {
    params: { id },
  } = match;
  return <ProductLayout>id:{id}</ProductLayout>;
};
