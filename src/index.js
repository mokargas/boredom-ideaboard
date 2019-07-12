import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import "reset-css";
import "./styles.css";

import App from "./components/App";
import rootReducer from "./reducers";
import initial from "./state";

const store = createStore(
  rootReducer,
  initial, //TODO: Move, just some test store for now.
  composeWithDevTools(applyMiddleware(createLogger()))
);

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
