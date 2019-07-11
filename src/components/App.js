import React from "react";
import styled from "styled-components";
import NodeController from "./NodeController/NodeController";

const Container = styled.div`
  margin: 0 auto;
  padding: 3rem;
`;

const App = ({ nodes = [] }) => {
  return (
    <Container>
      <h1>
        Idea Sandbox
        <span role="img" aria-label="Idea Sandbox">
          💡
        </span>
      </h1>
      <p>Fun project where we create ideas</p>
      <NodeController />
    </Container>
  );
};

export default App;
