<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-row">
    <NavBar class="flex-none"></NavBar>
    <RouterView class="flex-auto" />
  </div>
</template>
