<template>
  <div class="flex flex-wrap justify-center -m-2 mb-10">
    <p v-for="food in foodsOrdered" :key="food.foodId" class="flex">
      <input :id="food.name" name="ingredients" type="checkbox" class="hidden" :value="ui.ingredients.includes(food.foodId)" @change="ui.onSelectIngredients(food)">
      <label v-tooltip="food.name" :for="food.name" class="cursor-pointer border-2 border-white border-opacity-20 rounded-lg w-20 h-20 m-2 p-2 hover:border-opacity-40 cursor-pointer e-ingredient" :data-selected="ui.ingredients.includes(food.foodId)">
        <img :src="food.img" :alt="food.name" width="38" height="38">
      </label>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IngredientsComponent',
};
</script>

<script setup lang="ts">
import { foods } from '@/constants/images';
import { uiStore } from '@/store/ui';
import { computed } from 'vue';
import { EnumFoodType, IFood } from '@/models/recipes';
import { orderBy } from 'lodash-es';

const ui = uiStore();

const ingredients = computed<IFood[]>(() => Object.values(foods).filter(q => q.type === EnumFoodType.Ingredient));
const foodsOrdered = computed<IFood[]>(() => orderBy(ingredients.value, 'name', 'asc'));
</script>

<style lang="scss" scoped>
.e-ingredient {
  &[data-selected="true"] {
    @apply bg-white bg-opacity-30;
  }
}
</style>

