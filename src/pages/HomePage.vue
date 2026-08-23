<template>
  <div class=" justify-center items-center">
    <BaseCard>{{ randomGreeting() }} My name is Justin.</BaseCard>
  </div>
  <div>
    <Navbar></Navbar>
  </div>

</template>

<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'
import Navbar from '@/components/ui/Navbar.vue'
import { onMounted } from 'vue'

const greetings = ['Howdy!', 'Hello there!', 'Hi!', 'Hi, how are ya?']

function randomGreeting() {
  if (greetings.length > 0) {
    var selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    return selectedGreeting
  }
}

onMounted(() => {
  randomGreeting()
})
</script>
