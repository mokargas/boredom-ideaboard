import ActionTypes from "./constants/actionTypes";

export const createNode = ({ title, content, created }) => {
  return {
    type: ActionTypes.CREATE_NODE,
    title,
    content,
    updated: created,
    created
  };
};

export const updateNode = ({ title, content, updated }) => {
  return {
    type: ActionTypes.UPDATE_NODE,
    title,
    content,
    updated
  };
};

export const deleteNode = ({ id }) => {
  return {
    type: ActionTypes.DELETE_NODE,
    id
  };
};