import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "views/Cart";
import Home from "views/Home";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={Home} />
      <Route path={"/plants"} render={Cart} />
      <Route path={"/flowers"} render={Cart} />
      <Route path={"/accesories"} render={Cart} />
      <Route path={"/promo"} render={Cart} />
    </Switch>
  );
};
