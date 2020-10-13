import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { StyledCarousel } from "./Carousel.styled";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Carousel = () => {
  return (
    <StyledCarousel>
      <Swiper
        spaceBetween={50}
        autoHeight
        direction={"vertical"}
        slidesPerView={1}
        pagination={{ type: "fraction" }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </StyledCarousel>
  );
};
