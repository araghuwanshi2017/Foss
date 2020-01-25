import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a2e9f26 = () => interopDefault(import('../pages/home_page.vue' /* webpackChunkName: "pages/home_page" */))
const _36dafd58 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _aa1cc832 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _9fb1d6b2 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _3d6c0e60 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home_page",
    component: _0a2e9f26,
    name: "home_page"
  }, {
    path: "/inspire",
    component: _36dafd58,
    name: "inspire"
  }, {
    path: "/login",
    component: _aa1cc832,
    name: "login"
  }, {
    path: "/profile",
    component: _9fb1d6b2,
    name: "profile"
  }, {
    path: "/",
    component: _3d6c0e60,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
