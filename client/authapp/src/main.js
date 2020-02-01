import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

const base = axios.create({
  baseUrl: "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
