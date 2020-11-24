import React from "react";

import { StyledListedProduct } from "./ListedProduct.styled";

interface ListedProductInterface {
  product: any;
}

export const ListedProduct: React.FC<ListedProductInterface> = ({
  product,
}) => {
  return <StyledListedProduct></StyledListedProduct>;
};
