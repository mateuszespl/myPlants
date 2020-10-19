import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Router from "components/Router";
import store from "store";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};
