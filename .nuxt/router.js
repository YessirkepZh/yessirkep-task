import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed919b50 = () => interopDefault(import('../pages/benford.vue' /* webpackChunkName: "pages/benford" */))
const _7c53ee9a = () => interopDefault(import('../pages/stack.vue' /* webpackChunkName: "pages/stack" */))
const _f5d006bc = () => interopDefault(import('../pages/widget.vue' /* webpackChunkName: "pages/widget" */))
const _3597c038 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/benford",
    component: _ed919b50,
    name: "benford"
  }, {
    path: "/stack",
    component: _7c53ee9a,
    name: "stack"
  }, {
    path: "/widget",
    component: _f5d006bc,
    name: "widget"
  }, {
    path: "/",
    component: _3597c038,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
