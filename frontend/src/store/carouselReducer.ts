import * as actionTypes from "./actionTypes";

const initialState = {
  currentSlide: 0,
};

export const carouselReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case actionTypes.HELLO:
      return { ...state, currentSlide: state.currentSlide++ };
    default:
      return new Error();
  }
};
