import React, { createContext, useReducer } from "react";

const initialState = {
  carouselCurrentSlide: 0,
};
const store = createContext<{}>(initialState);
const { Provider } = store;

const StateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case "action description":
        return { ...state, siemanko: "koleżanko" };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
