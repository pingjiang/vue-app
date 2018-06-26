import 'iview/dist/styles/iview.css';

import iview from 'iview';
import VueWait from 'vue-wait';
import components from './components';
import * as filters from './utils/filters';

export const instanceProperties = {
  wait: new VueWait({
    useVuex: true,
  }),
};

export default {
  install(Vue) {
    Vue.use(iview);
    Vue.use(VueWait);
    Vue.use(components);

    Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
  },
};
