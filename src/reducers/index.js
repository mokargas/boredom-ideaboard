import ActionTypes from "/src/constants";

export const Reducers = (state = {}, action) => {
  const { id, title, content, updated, created } = action;
  switch (action.type) {
    case ActionTypes.CREATE_NODE:
      return Object.assign({}, state, {
        title,
        content,
        updated: new Date(),
        created: new Date()
      });
    case ActionTypes.UPDATE_NODE:
      return Object.assign({}, state, {
        title,
        content,
        updated: new Date()
      });
    case ActionTypes.DELETE_NODE:
      return state.filter(node => node.id === id);
    default:
      return state;
  }
};
