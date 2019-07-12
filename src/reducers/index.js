import ActionTypes from "/src/constants";
import uuid from "uuid";

export const Reducers = (state = {}, action) => {
  const { id, title, content } = action;
  switch (action.type) {
    case ActionTypes.CREATE_NODE:
      const initialDate = new Date();
      return Object.assign({}, state, {
        nodes: [
          ...state.nodes,
          {
            id: uuid(),
            title,
            content,
            updated: initialDate,
            created: initialDate
          }
        ]
      });
    case ActionTypes.UPDATE_NODE:
      const selectedNode = state.nodes.find(node => node.id === id);
      const updatedNode = {
        ...selectedNode,
        title,
        content,
        updated: new Date()
      };

      return Object.assign({}, state, {
        nodes: [...state.nodes.filter(node => node.id !== id), updatedNode]
      });
    case ActionTypes.DELETE_NODE:
      return Object.assign(
        {},
        { nodes: [...state.nodes.filter(node => node.id !== id)] }
      );
    default:
      return state;
  }
};
