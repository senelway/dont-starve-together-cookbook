<template>
  <LayoutComponent>
    <main class="b-container">
      <header class="lg:sticky top-0 bg-black z-10 py-8">
        <div class="flex flex-wrap items-center -mx-2 mb-2">
          <div class="mx-2 mb-4 w-full md:grow md:w-auto md:basis-0"><SearchComponent /></div>
          <div class="mx-2 mb-4"><OrderComponent /></div>
          <div class="mx-2 mb-4"><VegetableComponent /></div>
          <div class="mx-2 mb-4"><WarlySpecificComponent /></div>
        </div>
        <CharacterFavoritesComponent />
      </header>

      <IngredientsComponent />

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
import IngredientsComponent from '@/views/Index/components/ingredients.vue';

</script>

<style lang="scss" scoped>
</style>
