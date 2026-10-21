<template>
  <StarsBackground />
  <div>
    <Navbar v-if="$route.name !== 'home'" />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import StarsBackground from './components/ui/StarsBackground.vue'
import Navbar from '@/components/ui/Navbar.vue'
</script>
