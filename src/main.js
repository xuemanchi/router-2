import Vue from 'vue'
import App from './App.vue'
import VueRouter from './vue-router/index'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      components: Foo,
    },
    {
      path: '/bar',
      components: Bar,
    },
  ],
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
