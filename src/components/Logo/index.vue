<template>
  <router-link to="/" class="font-belisa mt-12 b-logo flex items-center justify-center">
    <p class="pt-8"><span class="text-4xl">Don`t starve together</span> <br> <span class="text-8xl">Cook book</span></p>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'LogoComponent',
};
</script>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.b-logo {
  text-shadow: 0.1rem 0.1rem black;

  &::before {
    content: '';
    @apply w-44 h-44 bg-center bg-contain block;
    background-image: url("/src/assets/img/logo.png");
  }
}
</style>
