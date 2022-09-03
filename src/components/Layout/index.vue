<template>
  <LogoComponent />
  <slot></slot>
  <FooterComponent />
</template>

<script lang="ts">
export default {
  name: 'LayoutComponent',
};
</script>
<script setup lang="ts">
import LogoComponent from '@/components/Logo/index.vue';
import FooterComponent from '@/components/Footer/index.vue';
</script>

<style lang="scss" scoped>
</style>
