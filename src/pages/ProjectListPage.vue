<template>
  <div class="mx-auto max-w-2-5">
    <div class="pt-28">
      <div class="my-5 font-jd-title text-jd-header">
        <h1
          class="text-4xl relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          projects
        </h1>
        <p class="text-md text-jd-muted font-jd-body pt-2">
          Here are some of the things I've built.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-3 gap-6">
        <article v-for="project in projects" :key="project.id">
          <div class="text-jd-subheader font-jd-title text-2xl">{{ project.title }}</div>
          <div class="text-jd-muted font-jd-body text-sm">{{ project.summary }}</div>
          <router-link :to="`/projects/${project.id}`" class="flex flex-col h-full w-auto">
            <img
              :src="project.image"
              alt=""
              class="w-full h-56 object-cover rounded-2xl hover:aura hover:aura-md"
            />
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 'danby-fire-company',
    title: 'Danby Volunteer Fire Company',
    summary:
      'An informational website made for the Danby Volunteer Fire Department of Danby, New York.',
    image: new URL('@/assets/images/dvfc_home.png', import.meta.url).href,
  },
  {
    id: 'rutabaga-app',
    title: 'Rutabaga',
    summary: "A recipe app I made for my wife (so she wouldn't have to pay for NYT Cooking).",
    image: new URL('@/assets/images/rutabaga_home.png', import.meta.url).href,
  },
  {
    id: 'dimidapp-day',
    title: 'Dimidapp.day',
    summary: 'My wedding website that handled RSVPs, photos, and more!',
    image: new URL('@/assets/images/dimidapp_home.png', import.meta.url).href,
  },
]
</script>
