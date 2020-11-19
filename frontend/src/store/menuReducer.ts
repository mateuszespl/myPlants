import * as actionTypes from "./actionTypes";

const initialState = {
  isMenuOpen: false,
};

export const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_MENU_STATUS:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
