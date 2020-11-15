import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "views/Cart";
import Home from "views/Home";
import Category from "views/Category";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={Home} />
      <Route path={"/category/:category"} render={Category} />
      <Route path={"/flowers"} render={Cart} />
      <Route path={"/accesories"} render={Cart} />
      <Route path={"/promo"} render={Cart} />
    </Switch>
  );
};
