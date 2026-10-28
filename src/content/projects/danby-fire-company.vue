<template>
  <ProjectLayout
    title="Danby Volunteer Fire Company"
    summary="An informational website made for the Danby Volunteer Fire Department of Danby, New York."
    website="https://danbyfiredept.org/"
    github="https://github.com/jdimichele/DanbyFireDept"
  >
    <div class="flex mt-2">
      <h3 class="text-jd-muted font-jd-body">made with:</h3>
      <div class="flex">
        <div class="text-jd-subheader hover:text-jd-muted px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
            <!-- Icon from File Icons by John Gardner - https://github.com/file-icons/icons/blob/master/LICENSE.md -->
            <path
              fill="currentColor"
              d="M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766z"
            />
          </svg>
        </div>
        <div class="text-jd-subheader hover:text-jd-muted px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 373 512">
            <!-- Icon from File Icons by John Gardner - https://github.com/file-icons/icons/blob/master/LICENSE.md -->
            <path
              fill="currentColor"
              d="M323.669 114.555c-1.516-9.335-11.112-13.198-17.794-6.505l-62.225 62.165l-47.868-91.038c-4.473-8.515-15.34-9.407-19.765-.868l-27.129 51.66L83.521 6.332C78.127-3.8 64.427-1.217 62.657 10.125L0 410.825l143.038-269.622l46.368 85.666L.054 413.574l168.103 93.96a35.2 35.2 0 0 0 34.306.008l169.653-94.617z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Details -->
    <div>
      <article class="max-w-4xl mx-auto py-10 px-4">
        <div class="carousel aura">
          <img :src="imagePath" alt="" class="rounded-xl" />
        </div>

        <div class="mx-auto">
          <h3 class="text-jd-header font-jd-title text-xl">purpose</h3>
          <p>
            Something I wasn't familiar with was the fact that a lot of communities and cities in
            rural towns don't have the funding for a fully equipped fire department and resort to
            funding and staffing firefighters through community outreach. One such place is a city
            in New York called Danby.
          </p>
        </div>
      </article>
    </div>
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from '@/components/ui/ProjectLayout.vue'
const imagePath = new URL('@/assets/images/dvfc_home.png', import.meta.url).href
</script>
