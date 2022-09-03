<template>
  <footer class="pb-12">
    <div class="flex b-characters justify-around">
      <img src="/src/assets/img/footer_wilson.png" alt="" class="w-32">
    </div>
    <p class="text-base text-center">contact <a href="mailto:strelkov@duck.com">strelkov@duck.com</a></p>
    <p class="text-base text-center">codebase <a href="https://github.com/stk-dmitry/dont-starve-together-cookbook">github</a></p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
footer {
  a {
    border-bottom-width: 0.1rem;
    @apply border-yellow-400;
  }
}
</style>
