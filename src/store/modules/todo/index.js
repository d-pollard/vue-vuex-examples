const state = {
  list: []
};

const mutations = {
  addTodo(state, description) {
    if (description.length < 1)
      return;
    state.list.push({
      done: false,
      description,
      date: (new Date()).getDate()
    });
  },
  removeTodo(state, index) {
    state.list.splice(index, 1)
  },
  finishTodo(state, index) {
    state.list[index].done = true;
  },
  unfinishTodo(state, index) {
    state.list[index].done = false;
  }
};

export default {
  state,
  mutations
};
