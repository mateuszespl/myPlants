import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Router from "components/Router";
import store from "store";
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};
