<template>
  <Navbar></Navbar>

  <div class="mx-auto max-w-2-5 my-10">
    <div class="my-10">
      <div class="my-5 text-3xl font-jd-title text-jd-old-gold">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-jd-old-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          Projects
        </h1>
      </div>

      <div class="grid grid-cols-2 grid-rows-3">
        <div>Grid 1</div>
        <div>Grid 2</div>
        <div>Grid 3</div>
        <div>Grid 4</div>
        <div>Grid 5</div>
        <div>Grid 6</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>
