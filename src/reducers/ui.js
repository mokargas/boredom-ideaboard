import ActionTypes from "/src/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTER:
      return Object.assign({}, state, {
        filters: [
          ...state.filters.map(item => {
            return {
              ...item,
              default: item.value === action.selected.value ? true : false
            };
          })
        ]
      });
    default:
      return state;
  }
}
