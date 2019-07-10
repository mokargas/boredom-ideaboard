import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div``;

const App = ({ nodes = [], createNode }) => {
  const addNode = () => {
    createNode();
  };
  return (
    <Container>
      <h1>Idea Sandbox</h1>
      <p>Fun project where we create ideas</p>
      <div>Nodes here {nodes.length}</div>
      <button onClick={() => addNode()}>Add Idea</button>
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
