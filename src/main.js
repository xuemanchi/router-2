import Vue from 'vue'
import App from './App.vue'
import VueRouter from './vue-router/index'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import AComp from './components/children/a.vue'
import BComp from './components/children/b.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'a',
          component: AComp,
        },
        {
          path: 'b',
          component: BComp,
        },
      ],
    },
    {
      path: '/bar',
      component: Bar,
    },
  ],
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
