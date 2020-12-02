import React from "react";

import { StyledListedProduct } from "./ListedProduct.styled";

interface ListedProductInterface {
  product: any;
}

export const ListedProduct: React.FC<ListedProductInterface> = ({
  product,
}) => {
  const { name, price, img, id } = product;
  return (
    <StyledListedProduct>
      <p>{name}</p>
      <p>{price} PLN</p>
      <a href={`/product/${id}`}>
        <img alt={`${name}Pic`} src={img} />
      </a>
    </StyledListedProduct>
  );
};
