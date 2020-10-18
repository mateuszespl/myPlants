import { combineReducers } from "redux";

import { carouselReducer } from "./carouselReducer";

export const combinedReducer = combineReducers({ carousel: carouselReducer });
