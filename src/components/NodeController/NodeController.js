import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ActionTypes from "../../constants/";
import Node from "../../components/Node/Node";

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 2rem;
`;

const AddButton = styled.button`
  transition: 0.32s ease-out all;
  border: 1px solid darkgreen;
  background: transparent;
  color: darkgreen;
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: darkgreen;
    color: #fff;
    transform: translate(0, -2px);
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.7);
  }
`;

const Container = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const NodeController = ({ nodes, createNode, deleteNode, updateNode }) => {
  return (
    <Container>
      {nodes.length > 0 &&
        nodes.map((node, index) => (
          <Node
            key={index}
            {...node}
            onDelete={deleteNode}
            onUpdate={updateNode}
          />
        ))}
      <Actions>
        <AddButton onClick={() => createNode()}>Add new idea</AddButton>
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
    createNode: (title = "New node", content = "Add some data") => {
      dispatch({
        type: ActionTypes.CREATE_NODE,
        title,
        content
      });
    },
    deleteNode: id => {
      dispatch({
        type: ActionTypes.DELETE_NODE,
        id
      });
    },
    updateNode: (id, title, content) => {
      dispatch({
        type: ActionTypes.UPDATE_NODE,
        title,
        content,
        id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeController);
