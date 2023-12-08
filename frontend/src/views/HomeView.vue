<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-row">
    <NavBar class="flex-initial"></NavBar>
    <RouterView class="flex-auto" />
  </div>
</template>
