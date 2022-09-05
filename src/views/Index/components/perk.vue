<template>
  <input id="withPerk" v-model="ui.onlyWithPerk" type="checkbox">
  <label for="withPerk">Only with perk</label>
</template>

<script lang="ts">
export default {
  name: 'PerkComponent',
};
</script>
<script setup lang="ts">
import { uiStore } from '@/store/ui';

const ui = uiStore();
</script>

<style lang="scss" scoped>
</style>
