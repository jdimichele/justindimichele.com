<template>
  <div class="mx-auto max-w-2-5 my-10">
    <div class="my-10">
      <div class="my-5 font-jd-title text-jd-header">
        <h1
          class="text-4xl relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          projects
        </h1>
        <p class="text-sm text-jd-muted font-jd-body pt-2">Here are some of the things I've built.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-3 gap-6">
        <article v-for="project in projects" :key="project.id">
          <div>{{ project.title }}</div>
          <div>{{ project.summary }}</div>
          <router-link :to="`/projects/${project.id}`" class="flex flex-col h-full">
            <img :src="project.image" alt="" class="w-full h-48 object-cover rounded-2xl">

          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'

const projects = [{
  id: 'danby-fire-company',
  title: '',
  summary: '',
  image: '/src/assets/images/dvfc_home.png',
},
{
  id: '',
  title: '',
  summary: '',
  image: '',
},];
</script>
