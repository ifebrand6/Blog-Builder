import Vue from 'vue'
import App from './App.vue'
import People from './components/People.vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import Routers from './router'

Vue.config.productionTip = false

// API getters
Vue.use(VueResource)

// Route
Vue.use(VueRouter)

//route

const router = new VueRouter(
  {
    routes: Routers,
    mode: "history"
  }
)

// Custom directive
// Vue.directive('rainbow',{
//   //takes 3 params el bind and vnode  
//   bind(el){
//     el.style.color = '#' + Math.random.toString().slice(2,8)
//   }
// })

Vue.directive('theme', {
    bind(el, binding, vnode){
        if (binding.value == 'wide'){
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow'){
            el.style.maxWidth = "560px";
        }
        if(binding.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

// FILTER

// Vue.filter('to-uppercase', (value)=>{
//   return value.toUpperCase()
// })
// Vue.filter('to-concat',(value)=>{
//   return value.slice(0,50) + '...'
// } )

// PASSING COMPONET FROM PARENT TO CHILDREN
Vue.component('people', People)
Vue.component('app-header', Header)
Vue.component('app-main', Main)
Vue.component('app-footer', Footer)

export const bus = new Vue();
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
