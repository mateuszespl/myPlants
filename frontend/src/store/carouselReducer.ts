import * as actionTypes from "./actionTypes";

const initialState = {
  currentSlide: 1,
};

export const carouselReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CAROUSEL_UPDATE:
      return { ...state, currentSlide: action.currentSlide };
    default:
      return state;
  }
};
