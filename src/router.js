import Vue from 'vue';
import Router from 'vue-router';
import MasterView from './MasterView.vue';
import Kanban from './modules/kanban/router';
import common from './core/router_common';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/kanban',
      name: 'kanban',
      component: MasterView,
      children: Kanban('kanban'),
    },

    ...common,
  ],
});
