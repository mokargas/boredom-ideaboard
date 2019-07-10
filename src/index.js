import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import "reset-css";
import "./styles.css";

import App from "./components/App";

import { Reducers as rootReducer } from "./reducers";
import initialState from "./state/initialState";

const store = createStore(
  rootReducer,
  { nodes: [] },
  composeWithDevTools(applyMiddleware(createLogger()))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
