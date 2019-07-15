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
import { load, save } from "./state/localStorage";

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(createLogger()))
);

store.subscribe(() => {
  save({
    ui: {
      ...store.getState().ui
    },
    nodes: [...store.getState().nodes]
  });
});

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
