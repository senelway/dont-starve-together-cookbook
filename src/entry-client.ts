import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import createRouter from '@/router/';
import App from '@/app.vue';

import '@/assets/css/index.scss';

import connection from '@/connection';

const router = createRouter();
const head = createHead();
const pinia = createPinia();
const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .use(head)
;
connection(app, pinia, router);

if (window.__INITIAL_STATE__) {
  pinia.state.value = window.__INITIAL_STATE__;
}

router.isReady().then(() => {
  app.mount('#app', true);
});
