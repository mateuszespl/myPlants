import React from "react";

import Link from "components/Link";
import { StyledCollectionSlide } from "./CollectionSlide.styled";

export const ColletionSlide: React.FC = () => {
  return (
    <StyledCollectionSlide>
      <img
        alt="collectionPic"
        src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <img
        alt="collectionPic"
        src="https://images.pexels.com/photos/1578244/pexels-photo-1578244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <div>
        <header>
          <h1>PLANTS & FRIENDS COLLECTION \\ 2020</h1>
        </header>
        <Link to="/shop" text={"Shop now"} />
      </div>
    </StyledCollectionSlide>
  );
};
