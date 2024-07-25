import type { RouteRecordRaw } from 'vue-router'

export function createAppRoutes() {
  return [{
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
  }, {
    path: '/lorebooks',
    name: 'lorebooks',
    component: () => import('@/pages/lorebooks.vue'),
  }, {
    path: '/chats/:folder',
    name: 'chats',
    component: () => import('@/pages/chats.vue'),
    children: [{
      path: 'talk/:chat',
      name: 'talk',
      component: () => import('@/pages/talk.vue'),
    }],
  }, {
    path: '/settings',
    name: 'settings',
    component: () => import('@/pages/settings.vue'),
  }, {
    path: '/cards',
    name: 'cards',
    component: () => import('@/pages/cards.vue'),
  }] satisfies ReadonlyArray<RouteRecordRaw>
}
