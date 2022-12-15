import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { appReducer } from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

const middleware = [thunk];
const reduxStore = configureStore(
  { reducer: appReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
