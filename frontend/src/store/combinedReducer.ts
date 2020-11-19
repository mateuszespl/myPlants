import { combineReducers } from "redux";

import { menuReducer } from "./menuReducer";
import { carouselReducer } from "./carouselReducer";

export const combinedReducer = combineReducers({
  carousel: carouselReducer,
  menu: menuReducer,
});
