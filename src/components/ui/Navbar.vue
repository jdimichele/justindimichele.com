<template>
  <div v-if="!mobile" v-show="$route.name === 'home'" class="navbar">
    <ul class="text-jd-cool-steel font-jd-body text-2xl">
      <li>
        <RouterLink to="/about" class="hover:text-jd-subheader text-jd-muted">about</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="hover:text-jd-subheader text-jd-muted"
          >projects</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/blog" class="hover:text-jd-subheader text-jd-muted">blog</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="hover:text-jd-subheader text-jd-muted">contact</RouterLink>
      </li>
    </ul>
  </div>

  <!-- Top Nav for other pages -->
  <div v-if="!mobile" v-show="$route.name !== 'home'" class="navbar animate-slide-in-center">
    <div class="flex-1 p-2">
      <ul>
        <li>
          <RouterLink to="/"><img src="/letter_j.png" class="size-8" /></RouterLink>
        </li>
      </ul>
    </div>
    <div class="text-jd-cool-steel font-jd-body flex-none">
      <ul class="menu menu-horizontal px-1 text-2xl">
        <li>
          <RouterLink to="/about" class="hover:text-jd-subheader text-jd-muted">about</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="hover:text-jd-subheader text-jd-muted"
            >projects</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" class="hover:text-jd-subheader text-jd-muted">blog</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-jd-subheader text-jd-muted"
            >contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile Nav -->
  <div v-if="mobile">
    <ul class="text-jd-cool-steel font-jd-body">
      <li>
        <RouterLink to="/about" class="hover:text-jd-subheader text-jd-muted">about</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="hover:text-jd-subheader text-jd-muted"
          >projects</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/blogs" class="hover:text-jd-subheader text-jd-muted">blogs</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="hover:text-jd-subheader text-jd-muted">contact</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobile = ref(false)
const windowWidth = ref(window.innerWidth)

function checkScreenSize() {
  windowWidth.value = window.innerWidth
  mobile.value = windowWidth <= 816 // Shot in the dark here.
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize())
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
