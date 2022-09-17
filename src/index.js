import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { appReducer } from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const reduxStore = configureStore(
  { reducer: appReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
