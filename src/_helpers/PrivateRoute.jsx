import React from "react";
import { Route, Redirect } from "react-router-dom";

import { fakeAuth } from "./fakeAuth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/Login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
