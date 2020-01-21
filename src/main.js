import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2'
 
Vue.use(VueSweetalert2);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

