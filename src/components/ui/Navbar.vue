<template>
  <div v-if="!mobile" v-show="$route.name === 'home'" class="navbar">
    <ul class="text-jd-cool-steel font-jd-body text-2xl">
      <li>
        <RouterLink to="/about" class="hover:text-jd-wisteria">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="hover:text-jd-wisteria">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog" class="hover:text-jd-wisteria">Blogs</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="hover:text-jd-wisteria">Contact</RouterLink>
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
          <RouterLink to="/about" class="hover:text-jd-wisteria">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="hover:text-jd-wisteria">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/blog" class="hover:text-jd-wisteria">Blogs</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-jd-wisteria">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile Nav -->
  <div v-if="mobile">
    MOBILE
    <ul class="text-jd-cool-steel font-jd-body">
      <li>
        <RouterLink to="/about" class="hover:text-jd-wisteria">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="hover:text-jd-wisteria">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog" class="hover:text-jd-wisteria">Blogs</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="hover:text-jd-wisteria">Contact</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

var mobile
var mobileNav
var windowWidth

function checkScreenSize() {
  windowWidth = window.innerWidth
  if (windowWidth <= 816) {
    mobile = true
    return
  }
  mobile = false
  mobileNav = false
  return
}

function toggleMobileNav() {
  mobileNav = !mobileNav
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize())
  checkScreenSize()
})
</script>
