import * as actionTypes from "./actionTypes";

export const updateCarousel = (currentSlide: number) => ({
  type: actionTypes.CAROUSEL_UPDATE,
  currentSlide,
});

export const updateMenuStatus = () => ({ type: actionTypes.SET_MENU_STATUS });
