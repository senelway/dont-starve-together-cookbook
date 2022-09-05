<template>
  <select v-model="value" name="order" class="block w-full">
    <option :value="['asc', 'name']">Name (asc)</option>
    <option :value="['desc', 'name']">Name (desc)</option>
  
    <option :value="['asc', 'hp']">HP (asc)</option>
    <option :value="['desc', 'hp']">HP (desc)</option>
  
    <option :value="['asc', 'sanity']">Sanity (asc)</option>
    <option :value="['desc', 'sanity']">Sanity (desc)</option>
  
    <option :value="['asc', 'hunger']">Hunger (asc)</option>
    <option :value="['desc', 'hunger']">Hunger (desc)</option>
  </select>
</template>

<script lang="ts">
export default {
  name: 'OrderComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';
import { computed } from 'vue';

const ui = uiStore();

const value = computed<string>({
  get() {
    return ui.order.toString();
  },
  set(value) {
    ui.setOrder(value);
  }
});
</script>

<style lang="scss" scoped>
</style>
