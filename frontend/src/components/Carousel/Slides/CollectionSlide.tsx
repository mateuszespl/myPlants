import React from "react";

import Link from "components/Link";
import { StyledCollectionSlide } from "./CollectionSlide.styled";

export const ColletionSlide: React.FC = () => {
  return (
    <StyledCollectionSlide>
      <img src="https://images.unsplash.com/photo-1589187731885-5c2260597f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <img src="https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <div>
        <header>
          <h1>ON THE STREETS COLLECTION \\ 2020</h1>
        </header>
        <Link to="/shop" />
      </div>
    </StyledCollectionSlide>
  );
};
