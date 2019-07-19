import ActionTypes from "../constants";

export const updateFilter = ({ selected }) => {
  return {
    type: ActionTypes.UPDATE_FILTER,
    selected
  };
};

export const createNode = ({ title, content, created, color }) => {
  return {
    type: ActionTypes.CREATE_NODE,
    title,
    content,
    updated: created,
    created,
    color
  };
};

export const updateNode = ({ title, content, updated, color }) => {
  return {
    type: ActionTypes.UPDATE_NODE,
    title,
    content,
    updated,
    color
  };
};

export const deleteNode = ({ id }) => {
  return {
    type: ActionTypes.DELETE_NODE,
    id
  };
};
