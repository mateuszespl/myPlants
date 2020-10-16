import React from "react";

import { StyledPromoSlide } from "./PromoSlide.styled";

export const PromoSlide: React.FC = () => {
  return (
    <StyledPromoSlide>
      <img src="https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <div>
        <header>
          <h1>Available promo</h1>
        </header>
      </div>
    </StyledPromoSlide>
  );
};
