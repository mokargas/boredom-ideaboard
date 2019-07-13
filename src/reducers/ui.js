import ActionTypes from "/src/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTER:
      const update = {
        ...state.filters.find(item => item.value === action.selected.value),
        default: true
      };
      console.log(update);
      return Object.assign({}, state, {
        ...state,
        filters: [
          ...state.filters.filter(item => item.value !== action.selected.value),
          update
        ]
      });
    default:
      return state;
  }
}
