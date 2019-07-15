//Initial nodes
//TODO: We could prefill from the user's localstorage.
const initial = {
  ui: {
    filters: [
      { label: "Updated date", value: "updated", default: true },
      { label: "Created date", value: "created", default: false },
      { label: "Title", value: "title", default: false }
    ]
  },
  nodes: []
};
export default initial;
