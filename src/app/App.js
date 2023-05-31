import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./constants/constants";
import { map } from "lodash";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <CookiesProvider>
      <Routes>
        {map(PUBLIC_ROUTES, (route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.component}
            />
          );
        })}
        {map(PRIVATE_ROUTES, (route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </CookiesProvider>
  );
};

export default App;
