<template>
  <template v-if="ui.recipes.length">
    <section class="flex flex-wrap w-full mx-auto justify-center mb-2">
      <article
        v-for="recipe in ui.recipes"
        :key="recipe.recipeId"
        class="relative p-4 m-4 w-[22rem] sm:w-[calc(100%/3.4)] md:w-[calc(100%/4.5)] xl:w-[calc(100%/5.5)] bg-white bg-opacity-10 rounded-md duration-75 transition-all block"
        :data-warly="recipe.isWarlySpecific"
      >
        <RecipeBodyComponent :recipe-id="recipe.recipeId" />
      </article>
    </section>
    <p class="text-base text-center">founded recipes: {{ ui.recipes.length }}</p>
  </template>
  <template v-else>
    <img src="/src/assets/img/Cartographer_Desk.png" alt="no recipes found" class="w-56 m-auto">
    <h1 class="text-8xl font-belisa text-center">no recipes found</h1>
  </template>
  
  <router-view />
</template>

<script lang="ts">
export default {
  name: 'RecipesComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';

import RecipeBodyComponent from '@/views/Index/recpies/body.vue';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
