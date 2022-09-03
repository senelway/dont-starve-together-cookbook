<template>
  <input id="warlySpecific" v-model="ui.isWarlySpecific" type="checkbox">
  <label for="warlySpecific">Warly specific</label>
</template>

<script lang="ts">
export default {
  name: 'WarlySpecificComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
