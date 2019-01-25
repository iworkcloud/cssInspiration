import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/main'
import columnCount from '@/components/columnCount'
import grid from '@/components/grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/columnCount',
      name: 'columnCount',
      component: columnCount
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid
    }
  ]
})
