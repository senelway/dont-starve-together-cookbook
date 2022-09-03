<template>
  <div class="flex b-characters justify-around items-center">
    <button v-for="character in characters" :key="character" :class="ui.characters.includes(character) ? '' : 'opacity-20'" type="button" @click="ui.onSelectCharacter(character)">
      <img :src="'/src/assets/img/characters/' + character + '_Portrait.webp'" :alt="character" class="w-auto">
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
