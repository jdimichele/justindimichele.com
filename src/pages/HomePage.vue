<template>
  <div class="flex justify-center content-center items-center m-auto h-screen">
    <div class="flex flex-wrap columns-2">
      <div class="self-center">
        <BaseCard
          ><h1 class="animate-slide-in-center">{{ randomGreeting() }}</h1>
          My name is Justin.</BaseCard
        >
      </div>
      <div class="self-center">
        <Navbar></Navbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'
import Navbar from '@/components/ui/Navbar.vue'
import { onMounted } from 'vue'

const greetings = ['Howdy!', 'Hello there!', 'Hi!', 'Hi, how are ya?', 'Hey!', 'Nice to meet you!']

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
