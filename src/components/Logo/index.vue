<template>
  <div class="flex font-belisa items-center justify-center mt-12 b-logo">
    <p class="text-8xl">Cook book</p>
  </div>
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
  background-image: url("/src/assets/img/logo.png");
  @apply bg-no-repeat bg-center bg-contain py-12;
  text-shadow: 0.1rem 0.1rem black;
}
</style>
