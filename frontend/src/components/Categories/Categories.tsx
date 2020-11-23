import React from "react";

import { StyledCategories } from "./Categories.styled";

interface CategoriesInterface {}

export const Categories: React.FC<CategoriesInterface> = ({}) => {
  const categories = [
    {
      main: "Plants",
      sub: [
        "All plants",
        "Outdoor plants",
        "Tropical plants",
        "Aquatic plants",
      ],
    },
    { main: "Flowers", sub: ["All flowers", "Sunflowers", "Roses", "Orchids"] },
    {
      main: "Accesories",
      sub: ["All accesories", "Pots", "Watering tools", "Garden tools"],
    },
    {
      main: "Promo",
      sub: ["All promo", "Promo plants", "Promo flowers", "Promo accesories"],
    },
  ];
  return (
    <StyledCategories>
      <ul className="categories">
        {categories.map((category, id) => (
          <li>
            {category.main}
            <ul>
              {category.sub.map((subCategory, id) => (
                <li>{subCategory}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </StyledCategories>
  );
};
