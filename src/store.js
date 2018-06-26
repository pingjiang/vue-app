import Vue from 'vue';
import Vuex from 'vuex';
import vuexApi from './core/vuex-api';

import kanban from './modules/kanban/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vuexApi,
    kanban,
  },
});
