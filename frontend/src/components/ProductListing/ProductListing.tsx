import React from "react";
import ListedProduct from "./ListedProduct";
import { StyledProductListing } from "./ProductListing.styled";

interface ProductListingInterface {
  categories: { category: string; subcategory: string };
}

export const ProductListing: React.FC<ProductListingInterface> = ({
  categories,
}) => {
  const dummyProducts = [
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
    {
      name: "Plant",
      price: 120,
      img:
        "https://cdn.shopify.com/s/files/1/2528/3612/products/1-Dracaena-StedSolCane-4DETAIL_472x472.jpg?v=1605896121",
    },
  ];
  const { category, subcategory } = categories;
  return (
    <StyledProductListing>
      <ul>
        {dummyProducts.map((product, id) => (
          <ListedProduct key={id} product={{ ...product, id }} />
        ))}
      </ul>
      Kategoria: {category}
      <br /> Podkategoria {subcategory}
    </StyledProductListing>
  );
};
