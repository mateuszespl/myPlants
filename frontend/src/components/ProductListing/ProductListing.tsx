import React from "react";
import ListedProduct from "./ListedProduct";
import { StyledProductListing } from "./ProductListing.styled";

interface ProductListingInterface {
  categories: { category: string; subcategory: string };
}

export const ProductListing: React.FC<ProductListingInterface> = ({
  categories,
}) => {
  const dummyProducts = [{ name: "Plant", price: 120 }];
  const { category, subcategory } = categories;
  return (
    <StyledProductListing>
      <ul>
        {dummyProducts.map((product, id) => (
          <ListedProduct product={product} />
        ))}
      </ul>
      Kategoria: {category}
      <br /> Podkategoria {subcategory}
    </StyledProductListing>
  );
};
