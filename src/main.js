import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import {store} from "./store/store";
import {routes} from "./routes";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-55169.firebaseio.com/ '

export const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  store,
router,
  render: h => h(App)
});
