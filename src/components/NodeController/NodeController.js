import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Node from "../../components/Node/Node";

import { IoMdAdd } from "react-icons/io";
import Filter from "../Filter/Filter";
import ActionTypes from "../../constants/";

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 2rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  transition: 0.32s ease-out all;
  border: 1px solid #b6f7c1;
  background: #b6f7c1;
  color: #373640;
  font-size: 1.25rem;
  padding: 0.5rem 0.75rem 0.5rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #caffd3;
    color: #373640;
    transform: translate(0, -2px);
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.7);
  }
`;

const Container = styled.div`
  margin-bottom: 2rem;
`;

const NodeList = styled.div`
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  margin-right: 0.25rem;
`;

class NodeController extends Component {
  sortPosts() {
    const { nodes, filterOptions } = this.props;
    const key = filterOptions.find(i => i.default).value;
    const sorter =
      key === "title"
        ? (a, b) => a[key].localeCompare(b[key])
        : (a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime();
    return [...nodes.sort(sorter)];
  }

  render() {
    const {
      nodes,
      createNode,
      deleteNode,
      updateNode,
      updateFilter,
      filterOptions
    } = this.props;
    return (
      <Container>
        {nodes.length > 2 && (
          <Filter items={filterOptions} onUpdate={updateFilter} />
        )}
        <NodeList>
          {nodes.length > 0 &&
            this.sortPosts().map((node, index) => (
              <Node
                key={index}
                {...node}
                onDelete={deleteNode}
                onUpdate={updateNode}
              />
            ))}
        </NodeList>
        <ActionsContainer>
          <AddButton onClick={() => createNode()} title="Create a new idea">
            <IconWrapper>
              <IoMdAdd />
            </IconWrapper>
            Create new
          </AddButton>
        </ActionsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    nodes: state.nodes,
    filterOptions: state.ui.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: selected => {
      dispatch({
        type: ActionTypes.UPDATE_FILTER,
        selected
      });
    },
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
        id,
        title,
        content
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeController);
