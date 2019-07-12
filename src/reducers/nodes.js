import ActionTypes from "/src/constants";
import uuid from "uuid";

export default function(state = {}, action) {
  const { id, title, content } = action;
  switch (action.type) {
    case ActionTypes.CREATE_NODE:
      const initialDate = new Date();
      return [
        ...state,
        {
          id: uuid(),
          title,
          content,
          updated: initialDate,
          created: initialDate
        }
      ];
    case ActionTypes.UPDATE_NODE:
      const selectedNode = state.find(node => node.id === id);
      const updatedNode = {
        ...selectedNode,
        title,
        content,
        updated: new Date()
      };

      return [...state.filter(node => node.id !== id), updatedNode];
    case ActionTypes.DELETE_NODE:
      return [...state.filter(node => node.id !== id)];
    default:
      return state;
  }
}
