import Vue from 'vue'
import Router from 'vue-router'
import ControllerList from '@/components/ControllerList'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ControllerList',
      component: ControllerList
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
