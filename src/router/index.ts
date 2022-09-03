import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

import routesConst from '@/constants/routes';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: routesConst.index,
        name: routesConst.index,
        component: () => import('@/views/Index/index.vue'),
      },
    ]
  });
}
