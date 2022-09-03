import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import { renderToString } from '@vue/server-renderer';
import { createHead, renderHeadToString } from '@vueuse/head';

import App from './app.vue';
import createRouter from './router/';

import connection from './connection';

function renderPreloadLinks(modules, manifest) {
  let links = '';
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

function renderPreloadLink(file) {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith('.woff')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith('.woff2')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith('.gif')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith('.png')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    // TODO
    return '';
  }
}

export async function render(url, manifest, ssrParams) {
  const router = createRouter();
  const head = createHead();
  const app = createSSRApp(App);
  const pinia = createPinia();

  app
    .use(router)
    .use(pinia)
    .use(head)
  ;

  connection(app, pinia, router);

  await router.push(url);

  try {
    await router.isReady();
    const to = router.currentRoute;
    if (to.value.matched.length === 0) {
      return '';
    }
    const ctx = {};
    const html = await renderToString(app, ctx);
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    const metaInfo = await renderHeadToString(head);
    const state = JSON.stringify(pinia.state.value);
    return [html, state, preloadLinks, metaInfo];
  } catch (error) {
    console.log('catch server entry', error);
  }
}
