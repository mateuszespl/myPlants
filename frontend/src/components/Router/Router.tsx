import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "views/Cart";
import Home from "views/Home";
import Category from "views/Category";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/category/:category/:subcategory"} component={Category} />
      <Route path={"/category/:category"} component={Category} />
      <Route path={"/cart"} component={Cart} />
    </Switch>
  );
};
