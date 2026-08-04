<template>
  <StarsBackground />
  <div>
    <router-view class=" relative z-10">test</router-view>
  </div>
</template>

<script setup>
import StarsBackground from './components/ui/StarsBackground.vue'
</script>
