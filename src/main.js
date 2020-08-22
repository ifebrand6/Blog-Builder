import Vue from 'vue'
import App from './App.vue'
import People from './components/People.vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

Vue.config.productionTip = false


Vue.component('people', People)
Vue.component('app-header', Header)
Vue.component('app-main', Main)
Vue.component('app-footer', Footer)

export const bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
