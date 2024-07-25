import { createRouter, createWebHistory } from 'vue-router'

import { createAppRoutes } from './routes'

export function createAppRouter() {
  return createRouter({
    routes: createAppRoutes(),
    history: createWebHistory(),
  })
}
