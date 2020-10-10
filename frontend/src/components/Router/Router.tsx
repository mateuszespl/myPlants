import React from "react";
import { Route, Switch } from "react-router-dom";

import { Cart } from "views/Cart/Cart";
import { Home } from "../../views/Home/Home";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={Home} />
      <Route path={"/cart"} render={Cart} />
    </Switch>
  );
};
