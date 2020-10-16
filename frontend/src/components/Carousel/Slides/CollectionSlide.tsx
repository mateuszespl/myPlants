import React from "react";

import Link from "components/Link";
import { StyledCollectionSlide } from "./CollectionSlide.styled";

export const ColletionSlide: React.FC = () => {
  return (
    <StyledCollectionSlide>
      <img src="https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <img src="https://images.pexels.com/photos/3214701/pexels-photo-3214701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <div>
        <header>
          <h1>ON THE STREETS COLLECTION \\ 2020</h1>
        </header>
        <Link to="/shop" text={"Shop now"} />
      </div>
    </StyledCollectionSlide>
  );
};
