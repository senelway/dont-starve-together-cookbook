<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onServerPrefetch } from 'vue';

import { useHead } from '@vueuse/head';

export default defineComponent({
  name: 'App',
  setup () {
    onServerPrefetch(async () => {
      console.log('server prefetch');
    });

    onBeforeMount(() => {
      console.log('App onBeforeMount', import.meta.env.SSR);
    });

    useHead({
      title: 'Don`t Starve Together Cookbook',
      meta: [
        { name: 'description', content: 'The don`t starve together cookbook is a Cooking Filter' },
        { name: 'viewport', content: 'initial-scale=1,viewport-fit=cover' },
      ],
      htmlAttrs: { lang: 'en' },
    });
  }
});
</script>
