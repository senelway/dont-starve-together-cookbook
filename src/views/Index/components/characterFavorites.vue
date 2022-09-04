<template>
  <div class="flex flex-wrap b-characters justify-center items-center">
    <button
      v-for="character in characters"
      :key="character"
      :class="ui.characters.includes(character.name) ? '' : 'opacity-30'" class="hover:opacity-60 transition-opacity duration-150"
      type="button"
      v-tooltip="character.name"
      @click="ui.onSelectCharacter(character.name)"
    >
      <img :src="character.avatar" :alt="character.name" class="w-auto">
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CharacterFavoritesComponent',
};
</script>
<script setup lang="ts">
import characters from '@/constants/characters';
import { uiStore } from '@/store/ui';
const ui = uiStore();
</script>

<style lang="scss" scoped>
.b-characters {
  img {
    width: 6rem;
  }
}
</style>
