import Vue from 'vue'
import Router from 'vue-router'
import ControllerList from '@/components/ControllerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ControllerList',
      component: ControllerList
    }
  ]
})
