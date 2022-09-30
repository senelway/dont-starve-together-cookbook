<template>
  <footer class="pb-12">
    <div class="flex b-characters justify-around">
      <img draggable="false" src="/src/assets/img/footer_wilson.png" alt="" width="84" height="72" class="w-24">
    </div>
    <p class="text-base text-center"><a href="mailto:strelkov@duck.com">strelkov@duck.com</a>, <a href="https://github.com/stk-dmitry/dont-starve-together-cookbook">github.com</a></p>
    <p class="text-base text-center">content updated: 30 september 2022</p>
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
    @apply border-yellow-300 hover:border-white transition-all duration-200;
  }
}
</style>
