import Vue from 'vue'
import Router from 'vue-router'
import assembly from '@/components/customstyle'
import columnCount from '@/components/columnCount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'assembly',
      component: assembly
    },
    {
      path: '/columnCount',
      name: 'columnCount',
      component: columnCount
    }
  ]
})
