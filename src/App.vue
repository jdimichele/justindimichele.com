<template>
  <StarsBackground />
  <div class="relative min-h-screen">
    <Navbar v-if="$route.name !== 'home'" />

    <RouterView v-slot="{ Component }">
      <transition name="pop" mode="out-in">
        <div :key="$route.fullPath">
          <component :is="Component" />
        </div>
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import StarsBackground from './components/ui/StarsBackground.vue'
import Navbar from '@/components/ui/Navbar.vue'
</script>

<style>
.pop-enter-active,
.pop-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.pop-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
