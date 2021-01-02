import React from "react";

import ProductListingItem from "./ProductListingItem";
import { StyledProductListing } from "./ProductListing.styled";
import dummyProducts from "./../data";

interface ProductListingInterface {
  categories: { category: string; subcategory: string };
}

export const ProductListing: React.FC<ProductListingInterface> = ({
  categories,
}) => {
  const { category, subcategory } = categories;
  return (
    <StyledProductListing>
      <ul>
        {dummyProducts.map((product, id) => (
          <ProductListingItem key={id} product={{ ...product, id }} />
        ))}
      </ul>
      Kategoria: {category}
      <br /> Podkategoria {subcategory}
    </StyledProductListing>
  );
};
