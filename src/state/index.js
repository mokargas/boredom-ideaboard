//Initial nodes
//TODO: We could prefill from the user's localstorage.
const initial = {
  ui: {
    filters: [
      { label: "Updated date", value: "updated", default: false },
      { label: "Created date", value: "created", default: false },
      { label: "Title", value: "title", default: true }
    ]
  },
  nodes: []
};
export default initial;
