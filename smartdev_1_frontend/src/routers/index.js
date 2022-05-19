import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";

import routes from "./router";
import AuthorizeHOC from "../HOCs/AuthorizeHOC";
import UnauthorizeHOC from "../HOCs/UnauthorizeHOC";
import history from "../sagas/history";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      {routes.map((routeItem, index) => {
        const {
          layout: Layout = Fragment,
          component: Component,
          path,
          isAuthorize,
          role,
          exact,
          ...rest
        } = routeItem;
        // TODO Add Private routeRouteCustom = isAuthRoute ? PrivateRoute : Route
        const RouteCustom =
          isAuthorize === "authorize"
            ? AuthorizeHOC
            : isAuthorize === "unauthorize"
            ? UnauthorizeHOC
            : Route;
        return (
          <RouteCustom
            key={index.toString()}
            path={path}
            exact={exact}
            role={role}
          >
            <Layout>
              <Component {...rest} />
            </Layout>
          </RouteCustom>
        );
      })}
    </Switch>
  </Router>
);

export default AppRouter;
