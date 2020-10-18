import * as actionTypes from "./actionTypes";

export const updateCarousel = (currentSlide: number) => ({
  type: actionTypes.CAROUSEL_UPDATE,
  currentSlide,
});
