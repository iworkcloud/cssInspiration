import Vue from 'vue'
import Router from 'vue-router'
import css from '@/cssInspiration/customstyle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customstyle',
      component: customstyle
    }
  ]
})
