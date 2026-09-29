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
          Skills <b class="text-jd-wisteria">&</b> Experience
        </h1>
      </div>

      <div class="">
        <ul class="text-xl font-jd-body text-jd-cool-steel">
          <h3 class="text-jd-wisteria">Languages:</h3>
          <li>Java / C# / JavaScript / TypeScript</li>
          <h3 class="text-jd-wisteria">Frameworks:</h3>
          <li>Vue.js / </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>
