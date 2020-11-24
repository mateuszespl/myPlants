import React from "react";
import { Link } from "react-router-dom";

import { StyledCategories } from "./Categories.styled";

interface CategoriesInterface {
  match: any;
}

export const Categories: React.FC<CategoriesInterface> = ({ match }) => {
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
  const { url } = match;
  return (
    <StyledCategories>
      <ul className="categories">
        {categories.map((category, id) => (
          <li key={`${category}:${id}`}>
            {category.main}
            <ul>
              {category.sub.map((subCategory, id) => (
                <li key={`${subCategory}:${id}`}>
                  <Link
                    className={
                      url ===
                      `/category/${category.main.toLowerCase()}/${subCategory
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`
                        ? "active"
                        : undefined
                    }
                    to={`/category/${category.main.toLowerCase()}/${subCategory
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    {subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {console.log(match)}
    </StyledCategories>
  );
};
