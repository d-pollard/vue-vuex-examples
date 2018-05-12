import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: require('./modules/counter').default,
    todo: require('./modules/todo').default,
  }
});

export default store;


