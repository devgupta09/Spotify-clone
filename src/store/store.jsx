import { action, createStore } from "easy-peasy";

const store = createStore({
  initialState: { token: null },
  updateToken: action((state, payload) => {
    state.initialState.token = payload;
  }),
});

export default store;
