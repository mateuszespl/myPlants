import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import "swiper/swiper.scss";

import { StyledCarousel } from "./Carousel.styled";
import { ColletionSlide, NewinSlide, PromoSlide, StoresSlide } from "./Slides";

SwiperCore.use([Mousewheel]);

interface CarouselInterface {
  updateCarousel: (currentSlide: number) => void;
}

export const Carousel: React.FC<CarouselInterface> = ({ updateCarousel }) => {
  return (
    <StyledCarousel>
      <Swiper
        mousewheel
        direction={"vertical"}
        slidesPerView={1}
        onSlideChange={({ realIndex }) => updateCarousel(realIndex + 1)}
      >
        <SwiperSlide>
          <ColletionSlide />
        </SwiperSlide>
        <SwiperSlide>
          <NewinSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PromoSlide />
        </SwiperSlide>
        <SwiperSlide>
          <StoresSlide />
        </SwiperSlide>
      </Swiper>
    </StyledCarousel>
  );
};
