import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { StyledNewinSlide } from "./NewinSlide.styled";

export const NewinSlide: React.FC = () => {
  return (
    <StyledNewinSlide>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("hej")}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
      </Swiper>
    </StyledNewinSlide>
  );
};
