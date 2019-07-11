import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NodeController from "./NodeController/NodeController";

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;
const Container = styled.div``;

const App = ({ nodes = [], createNode }) => {
  const addNode = () => {
    createNode();
  };
  return (
    <Container>
      <h1>
        Idea Sandbox
        <span role="img" aria-label="Idea Sandbox">
          💡
        </span>
      </h1>
      <p>Fun project where we create ideas</p>
      <NodeController nodes={nodes} />
      <Actions>
        <button onClick={() => addNode()}>Add new idea</button>
      </Actions>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    nodes: state.nodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNode: (title = "New node", content = "Add data") => {
      dispatch({
        type: "CREATE_NODE",
        title,
        content
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
