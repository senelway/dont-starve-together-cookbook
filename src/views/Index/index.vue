<template>
  <LayoutComponent>
    <main class="b-container">
      <header class="mb-12">
        <div class="flex items-center -mx-2 mb-2">
          <div class="mx-2 grow w-auto basis-0"><SearchComponent /></div>
          <div class="mx-2"><OrderComponent /></div>
          <div class="mx-2"><VegetableComponent /></div>
          <div class="mx-2"><WarlySpecificComponent /></div>
        </div>
        <CharacterFavoritesComponent />
      </header>
      <RecipesComponent />
    </main>
  </LayoutComponent>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
};
</script>
<script setup lang="ts">
import LayoutComponent from '@/components/Layout/index.vue';

import SearchComponent from '@/views/Index/components/search.vue';
import RecipesComponent from '@/views/Index/components/recipes.vue';
import OrderComponent from '@/views/Index/components/order.vue';
import VegetableComponent from '@/views/Index/components/vegetable.vue';
import WarlySpecificComponent from '@/views/Index/components/warlySpecific.vue';
import CharacterFavoritesComponent from '@/views/Index/components/characterFavorites.vue';

</script>

<style lang="scss" scoped>
</style>
