import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import { StyledNewinSlide } from "./NewinSlide.styled";

SwiperCore.use([Pagination]);

export const NewinSlide: React.FC = () => {
  return (
    <StyledNewinSlide>
      <Swiper
        pagination={{ type: "progressbar" }}
        direction={"horizontal"}
        slidesPerView={"auto"}
        grabCursor
      >
        <SwiperSlide>
          <div>
            <img src="https://images.pexels.com/photos/1054787/pexels-photo-1054787.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://images.pexels.com/photos/6344/woman-legs-girl-grey.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://images.pexels.com/photos/4498553/pexels-photo-4498553.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://images.pexels.com/photos/1054787/pexels-photo-1054787.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledNewinSlide>
  );
};
