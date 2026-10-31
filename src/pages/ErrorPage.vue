<template>
  <div class="flex flex-col justify-center content-center items-center m-auto h-screen">
    <h1 class="animate-slide-in-center text-jd-header font-jd-title text-3xl mb-10">
      {{ random404() }}
    </h1>

    <div>
      <router-link to="/" class="inline-flex text-2xl text-jd-muted hover:text-jd-subheader mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <!-- Icon from Remix Icon by Remix Design - https://github.com/cyberalien/RemixIcon/blob/master/License -->
          <path
            fill="currentColor"
            d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
          />
        </svg>
        <h3 class="text-2xl text-jd-muted hover:text-jd-subheader">back</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const errorMessages = [
  'no signs of intelligent life out this far...',
  'definitely something went wrong here, turn back!',
  'must have taken a wrong turn somewhere...',
]

function random404() {
  if (errorMessages.length > 0) {
    var selectedRandom = errorMessages[Math.floor(Math.random() * errorMessages.length)]
    return selectedRandom
  }
}

onMounted(() => {
  random404()
})
</script>
