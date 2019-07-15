//Serializes our Node objects to localStorage.
//Via Dan Abramov
import initial from "../state/initial";

export const load = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return initial;
    }
    return JSON.parse(state);
  } catch (err) {
    return initial;
  }
};

export const save = state => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("state", serialized);
  } catch (err) {}
};
