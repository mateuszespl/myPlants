import React from "react";

import { StyledProductListingItem } from "./ProductListingItem.styled";

interface ProductListingItemInterface {
  product: any;
}

export const ProductListingItem: React.FC<ProductListingItemInterface> = ({
  product,
}) => {
  const { name, price, img, id } = product;
  return (
    <StyledProductListingItem>
      <p>{name}</p>
      <p>{price} PLN</p>
      <a href={`/product/${id}`}>
        <img alt={`${name}Pic`} src={img} />
      </a>
    </StyledProductListingItem>
  );
};
