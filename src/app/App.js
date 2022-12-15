import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./constants/constants";
import { map } from "lodash";

const App = () => {
  return (
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
    </Routes>
  );
};

export default App;
