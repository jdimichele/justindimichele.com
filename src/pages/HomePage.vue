<template>
  <div class="flex justify-center content-center items-center m-auto h-screen">
    <BaseCard class="">
      <div class="flex columns-3">
        <div class="self-center">
          <h1 class="animate-slide-in-center text-jd-old-gold font-jd-title text-3xl">
            {{ randomGreeting() }}
          </h1>
          <h1 class="text-jd-cool-steel font-jd-body text-2xl">My name is Justin.</h1>
        </div>
        <div class="divider divider-horizontal divider-warning"></div>
        <div class="self-center">
          <Navbar></Navbar>
        </div>
      </div>
    </BaseCard>
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
