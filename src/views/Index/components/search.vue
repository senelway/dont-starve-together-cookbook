<template>
  <input
    v-model="ui.search"
    type="search"
    class="block w-full"
    placeholder="Search by name"
  >
</template>

<script lang="ts">
export default {
  name: 'SearchComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
