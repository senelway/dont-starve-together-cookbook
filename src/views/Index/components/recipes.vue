<template>
  <template v-if="ui.recipes.length">
    <section class="flex flex-wrap -m-4 justify-center mb-2">
      <article
        v-for="recipe in ui.recipes"
        :key="recipe.recipesId"
        class="relative p-4 m-4 w-[22rem] sm:w-[calc(100%/3.4)] md:w-[calc(100%/4.5)] xl:w-[calc(100%/5.5)] bg-white bg-opacity-10 rounded-md duration-75 transition-all block"
        :data-warly="recipe.isWarlySpecific"
      >
        <template v-if="recipe.isWarlySpecific">
          <img draggable="false" src="/src/assets/img/utility/Portable_Crock_Pot.webp" alt="warly specitic" class="w-14 absolute -left-5 -top-5" title="Warly specific">
        </template>
      
        <div class="flex mb-2 justify-between items-center mb-4">
          <img draggable="false" :src="dictionary[recipe.imageDictionaryId].img" :alt="recipe.name" class="m-auto max-w-[6.6rem]">
        
          <div class="flex flex-wrap justify-center items-center max-w-[12rem]">
            <span class="e-characterStatus e-characterStatus__hp">{{ recipe.hp ?? '-' }}</span>
            <span class="e-characterStatus e-characterStatus__hunger">{{ recipe.hunger ?? '-' }}</span>
            <span class="e-characterStatus e-characterStatus__sanity">{{ recipe.sanity ?? '-' }}</span>
          
            <span class="e-characterStatus e-characterStatus__cookTime">{{ recipe.cookTime ?? '-' }} sec.</span>
            <span class="e-characterStatus e-characterStatus__perishTime">{{ recipe.perishTime ?? '-' }} days</span>
            <span
              class="e-characterStatus e-characterStatus__priority"
              title="Priority ratings decides the result of a particular cooking session based on the ingredients used; the highest rated recipe will always be chosen."
            >
              {{ recipe.priority ?? '-' }}
            </span>
          </div>
        </div>
  
        <a :href="recipe.fandomLink" target="_blank" rel="noreferrer noopener" class="hover:text-yellow-300">
          <p class="text-center text-5xl font-belisa mb-4">{{ recipe.name }}</p>
        </a>
      
        <div v-for="(ingredients, i) in recipe.ingredients" :key="i" class="flex justify-center mx-0.5 mb-1">
          <a v-for="ingredient in ingredients" :key="ingredient" v-tooltip='dictionary[ingredient].name' class="e-inventory_backdrop mx-0.5" rel="noopener noreferrer" target="_blank" :href="dictionary[ingredient].fandomLink">
            <img draggable="false" :src="dictionary[ingredient].img" :alt="dictionary[ingredient].name">
          </a>
        </div>
      
        <div class="flex flex-wrap justify-center -mx-0.5">
          <a v-for="exclude in recipe.exclude" :key="exclude" v-tooltip='dictionary[exclude].name' class="mx-0.5 e-inventory_backdrop e-inventory_backdrop__exclude" rel="noopener noreferrer" target="_blank" :href="dictionary[exclude].fandomLink">
            <img draggable="false" :src="dictionary[exclude].img" :alt="dictionary[exclude].name">
          </a>
        </div>
      
        <template v-if="recipe.perk">
          <p class="text-base text-center mt-4">{{ recipe.perk }}</p>
        </template>
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
import { dictionary } from '@/constants/images';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
