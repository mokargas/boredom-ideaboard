import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "reset-css";
import "./styles.css";

import styled from "styled-components";
import Node from "./components/Node/Node";

import { Reducers as rootReducer } from "./reducers";
import initialState from "./state/initialState";

const enhancers = composeWithDevTools();
const store = createStore(rootReducer, initialState, enhancers);

const Container = styled.div``;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Idea Sandbox</h1>
        <p>Fun project where we create ideas</p>
        <Node>This is where an idea would go</Node>
      </Container>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
