import React from "react";
import styled from "styled-components";
import NodeController from "./NodeController/NodeController";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 8rem 3rem 3rem 3rem;
  background: #63686e;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  height: 5rem;
  background: #373640;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: #fff;
`;

const App = ({ nodes = [] }) => {
  return (
    <Container>
      <Header>
        <h1>
          <span role="img" aria-label="Idea Sandbox">
            💡
          </span>
          &nbsp;Idea Sandbox
        </h1>
      </Header>
      <NodeController />
    </Container>
  );
};

export default App;
