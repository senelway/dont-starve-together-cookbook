<template>
  <input id="vegetable" v-model="ui.isVegetable" type="checkbox">
  <label for="vegetable">Only vegetable</label>
</template>

<script lang="ts">
export default {
  name: 'VegetableComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
