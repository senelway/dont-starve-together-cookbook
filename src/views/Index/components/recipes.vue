<template>
  <section class="flex -m-4" v-if="ui.recipes.length">
    <article v-for="recipe in ui.recipes" :key="recipe.recipesId" class="relative m-4 w-2/12 bg-white bg-opacity-10 rounded-md hover:bg-opacity-40 duration-75 transition-all">
      <a :href="recipe.fandomLink" target="_blank" rel="noreferrer noopener" class="p-4 block">
        <template v-if="recipe.isWarlySpecific">
          <img src="/src/assets/img/utility/Portable_Crock_Pot.webp" alt="warly specitic" class="w-14 absolute -left-5 -top-5" title="Warly specific">
        </template>
  
        <div class="flex mb-2 justify-between">
          <img :src="recipe.img" :alt="recipe.name" class="m-auto max-w-[6.6rem]">
    
          <div class="flex flex-wrap mb-4">
            <span class="e-characterStatus e-characterStatus__hp">{{ recipe.hp ?? '-' }}</span>
            <span class="e-characterStatus e-characterStatus__hunger">{{ recipe.hunger ?? '-' }}</span>
            <span class="e-characterStatus e-characterStatus__sanity">{{ recipe.sanity ?? '-' }}</span>
      
            <span class="e-characterStatus e-characterStatus__cookTime">{{ recipe.cookTime ?? '-' }} sec.</span>
            <span class="e-characterStatus e-characterStatus__perishTime">{{ recipe.perishTime ?? '-' }} days</span>
          </div>
        </div>
  
        <p class="text-center text-5xl font-belisa mb-4">{{ recipe.name }}</p>
  
        <div v-for="(ingredients, i) in recipe.ingredients" :key="i" class="flex justify-center mx-0.5 mb-1">
          <span v-for="(ingredient, o) in ingredients" :key="o" class="e-inventory_backdrop mx-0.5">
            <img :src="ingredient" :alt="ingredient">
          </span>
        </div>
  
        <div class="flex justify-center -mx-0.5">
          <span v-for="(exclude, o) in recipe.exclude" :key="o" class="mx-0.5 e-inventory_backdrop e-inventory_backdrop__exclude">
            <img :src="exclude" :alt="exclude">
          </span>
        </div>
  
        <template v-if="recipe.perk">
          <p class="text-base text-center">{{ recipe.perk }}</p>
        </template>
      </a>
    </article>
  </section>
  <template v-else>
    <h1 class="text-9xl font-belisa text-center">not found</h1>
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
import { computed } from 'vue';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
