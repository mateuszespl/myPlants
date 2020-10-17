import React from "react";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "store";
import Router from "components/Router";

export const App = () => {
  return (
    <StateProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StateProvider>
  );
};
