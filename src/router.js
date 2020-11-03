import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import (/* webpackChunkName: "Home" */ '../src/views/Home')
    },
    {
      path: '/sobremi',
      name: 'aboutme',
      component: () => import (/* webpackChunkName: "aboutme" */ '../src/views/AboutMe'),
      alias: ['/acerca']
      
    },
    {
      path: '/contactame',
      redirect: {name: 'contact'}
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import (/* webpackChunkName: "Contact" */ '../src/views/Contact')
    },
    {
      path: '/post/:number',
      name: 'RecentPost',
      component: () => import (/* webpackChunkName: "RecentPost" */ '../src/views/RecentPost')
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/administrator/:admin',
      name: 'Administrator',
      component: () => import (/* webpackChunkName: "Administrator" */ '../src/views/Administrator'),
      props: true
    }
  ]
})