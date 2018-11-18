export default {
  namespace: 'home',
  state: {
    list: [],
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};