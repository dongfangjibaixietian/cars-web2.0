const state = {
  selfLocation: true,
};
const mutations = {
  SELFLOCATION(state) {
    console.log(111);
    state.selfLocation = !state.selfLocation;
  },
};
const actions = {};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
