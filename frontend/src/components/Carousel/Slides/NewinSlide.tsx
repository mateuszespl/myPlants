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
            <img
              alt="newinPic"
              src="https://images.pexels.com/photos/1073069/pexels-photo-1073069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              alt="newinPic"
              src="https://images.pexels.com/photos/1331734/pexels-photo-1331734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              alt="newinPic"
              src="https://images.pexels.com/photos/2043739/pexels-photo-2043739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              alt="newinPic"
              src="https://images.pexels.com/photos/1207966/pexels-photo-1207966.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              alt="newinPic"
              src="https://images.pexels.com/photos/705911/pexels-photo-705911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="header">
        <header>
          <h1>New ones</h1>
        </header>
      </div>
    </StyledNewinSlide>
  );
};
