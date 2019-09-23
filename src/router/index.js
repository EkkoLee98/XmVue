import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import I18n from "../pages/I18n";

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Page1
  },
  {
    path:'/a',
    component: Page2,
    // children:[{
    //   path:'b',
    //   component:Page2
    // }]
  },
  {
    path:'/b',
    component: I18n,
  }
]

export default new Router({
  routes
})
