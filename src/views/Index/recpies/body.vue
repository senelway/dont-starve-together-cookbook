<template v-if="recipe">
  <template v-if="recipe.isWarlySpecific">
    <img v-tooltip="'Warly specific'" draggable="false" src="/src/assets/img/utility/Portable_Crock_Pot.webp" class="w-14 absolute -left-5 -top-5" title="Warly specific" alt="Warly specific">
  </template>
  
  <div class="flex mb-2 justify-between items-center mb-4">
    <img draggable="false" :src="foods[recipe.imageDictionaryId].img" :alt="foods[recipe.imageDictionaryId].name" class="m-auto max-w-[6.6rem]" width="70" height="70">
    
    <div class="flex flex-wrap justify-center items-center max-w-[12rem]">
      <span class="e-characterStatus e-characterStatus__hp">{{ recipe.hp ?? '-' }}</span>
      <span class="e-characterStatus e-characterStatus__hunger">{{ recipe.hunger ?? '-' }}</span>
      <span class="e-characterStatus e-characterStatus__sanity">{{ recipe.sanity ?? '-' }}</span>
      
      <span class="e-characterStatus e-characterStatus__cookTime">{{ recipe.cookTime ?? '-' }} sec.</span>
      <span class="e-characterStatus e-characterStatus__perishTime">{{ recipe.perishTime ?? '-' }} days</span>
      <span
        v-tooltip="'Priority ratings decides the result of a particular cooking session based on the ingredients used; the highest rated recipe will always be chosen.'"
        class="e-characterStatus e-characterStatus__priority"
      >
        {{ recipe.priority ?? '-' }}
      </span>
    </div>
  </div>
  
  <a :href="foods[recipe.imageDictionaryId].fandomLink" target="_blank" rel="noreferrer noopener" class="hover:text-yellow-300">
    <p class="text-center text-5xl font-belisa mb-4">{{ foods[recipe.imageDictionaryId].name }}</p>
  </a>
  
  <div v-for="(ingredients, i) in recipe.ingredients" :key="i" class="flex justify-center mx-0.5 mb-1">
    <a v-for="ingredient in ingredients" :key="ingredient" v-tooltip="foods[ingredient].name" class="e-inventory_backdrop mx-0.5" rel="noopener noreferrer" target="_blank" :href="foods[ingredient].fandomLink">
      <img draggable="false" :src="foods[ingredient].img" :alt="foods[ingredient].name" width="31" height="31">
    </a>
  </div>
  
  <div class="flex flex-wrap justify-center -mx-0.5">
    <a v-for="exclude in recipe.exclude" :key="exclude" v-tooltip="foods[exclude].name" class="mx-0.5 e-inventory_backdrop e-inventory_backdrop__exclude" rel="noopener noreferrer" target="_blank" :href="foods[exclude].fandomLink">
      <img draggable="false" :src="foods[exclude].img" :alt="foods[exclude].name" width="31" height="31">
    </a>
  </div>
  
  <template v-if="recipe.perk">
    <p class="e-perk" :data-type="recipe.perk.type">{{ recipe.perk.text }}</p>
  </template>
</template>

<script lang="ts">
export default {
  name: 'RecipeBodyComponent',
};
</script>
<script setup lang="ts">
import { computed, defineProps } from 'vue';

import { foods } from '@/constants/images';
import { IRecipe } from '@/models/recipes';
import recipes from '@/constants/recipes';

const props = defineProps<{ recipeId: number }>();

const recipe = computed<IRecipe | undefined>(() => recipes.find(q => props.recipeId === q.recipeId));
</script>

<style lang="scss" scoped>
</style>
