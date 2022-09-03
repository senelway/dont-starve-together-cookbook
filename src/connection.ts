import { Pinia } from 'pinia';
import { App, computed, markRaw, Ref } from 'vue';
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, Router } from 'vue-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import constantPlugin from '@/plugins/constants';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    set route(
      value: RouteLocationNormalizedLoaded | Ref<RouteLocationNormalizedLoaded>
    )
    get route(): RouteLocationNormalized
  }
}

export const connection = (app: App, pinia: Pinia, router: Router) => {
  app.use(constantPlugin);

  const route = computed(() => markRaw(router.currentRoute.value));
  pinia.use(() => ({
    // @ts-expect-error: WHY?
    route,
  }));
};

export default connection;
