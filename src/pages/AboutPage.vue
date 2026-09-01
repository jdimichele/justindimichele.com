<template>
  <Navbar></Navbar>

  <div class="mx-auto max-w-2-5 my-10">
    <div class="my-10">
      <div class="my-5 text-3xl font-jd-title text-jd-old-gold">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-jd-old-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          About
        </h1>
      </div>

      <div class="my-5">
        <p class="text-xl font-jd-body text-jd-cool-steel">
          Hey there, my name is Justin. I'm a software engineer with years of quality engineering
          behind me. I love making apps, websites, and games. Quality is something I care a lot
          about in all my endeavors.
        </p>
      </div>
    </div>

    <div class="my-10">
      <div class="my-5 text-3xl font-jd-title text-jd-old-gold">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-jd-old-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          Experience
        </h1>
      </div>

      <div class="">
        <p class="text-xl font-jd-body text-jd-cool-steel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>
