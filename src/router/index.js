import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: require('../components/Test').default
    },
    {
      path: '/todo',
      name: 'Todo',
      component: require('../components/Todo').default
    }
  ]
})
