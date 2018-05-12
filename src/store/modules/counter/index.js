const state = {
  counter: 0
};

const getters = {

};

const actions = {

};

const mutations = {
  changeCounter(state, amount) {
    //if (state.counter + amount >= -20)
      state.counter += amount;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
