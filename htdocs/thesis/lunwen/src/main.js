import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from "./shujuku/ajax";
import "../vue.config"
//引入ajax
Vue.prototype.$ajax = ajax;
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
