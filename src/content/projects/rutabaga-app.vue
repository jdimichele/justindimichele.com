<template>
  <ProjectLayout
    title="Rutabaga"
    summary="Because my wife shouldn't need to pay THAT much money for a recipe app."
    website="https://rutabaga.recipes/"
    github="https://github.com/jdimichele/Rutabaga"
  >
  </ProjectLayout>
  <div class="flex mt-2">
    <h3 class="text-jd-muted font-jd-body">made with:</h3>
    <div class="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="text-jd-subheader hover:text-jd-muted px-1 h-6"
      >
        <!-- Icon from File Icons by John Gardner - https://github.com/file-icons/icons/blob/master/LICENSE.md -->
        <path
          fill="currentColor"
          d="M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 373 512"
        class="text-jd-subheader hover:text-jd-muted px-1 h-6"
      >
        <!-- Icon from File Icons by John Gardner - https://github.com/file-icons/icons/blob/master/LICENSE.md -->
        <path
          fill="currentColor"
          d="M323.669 114.555c-1.516-9.335-11.112-13.198-17.794-6.505l-62.225 62.165l-47.868-91.038c-4.473-8.515-15.34-9.407-19.765-.868l-27.129 51.66L83.521 6.332C78.127-3.8 64.427-1.217 62.657 10.125L0 410.825l143.038-269.622l46.368 85.666L.054 413.574l168.103 93.96a35.2 35.2 0 0 0 34.306.008l169.653-94.617z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="text-jd-subheader hover:text-jd-muted px-1 h-6"
      >
        <!-- Icon from IonIcons by Ben Sperry - https://github.com/ionic-team/ionicons/blob/main/LICENSE -->
        <path
          d="M423.592 132.804A31.855 31.855 0 0 0 429 115c0-17.675-14.33-32-32-32a31.853 31.853 0 0 0-17.805 5.409C344.709 63.015 302.11 48 256 48 141.125 48 48 141.125 48 256c0 114.877 93.125 208 208 208 114.873 0 208-93.123 208-208 0-46.111-15.016-88.71-40.408-123.196zM391.83 391.832c-17.646 17.646-38.191 31.499-61.064 41.174-23.672 10.012-48.826 15.089-74.766 15.089-25.94 0-51.095-5.077-74.767-15.089-22.873-9.675-43.417-23.527-61.064-41.174s-31.5-38.191-41.174-61.064C68.982 307.096 63.905 281.94 63.905 256c0-25.94 5.077-51.095 15.089-74.767 9.674-22.873 23.527-43.417 41.174-61.064s38.191-31.5 61.064-41.174c23.673-10.013 48.828-15.09 74.768-15.09 25.939 0 51.094 5.077 74.766 15.089a191.221 191.221 0 0 1 37.802 21.327A31.853 31.853 0 0 0 365 115c0 17.675 14.327 32 32 32 5.293 0 10.28-1.293 14.678-3.568a191.085 191.085 0 0 1 21.327 37.801c10.013 23.672 15.09 48.827 15.09 74.767 0 25.939-5.077 51.096-15.09 74.768-9.675 22.873-23.527 43.418-41.175 61.064z"
          fill="currentColor"
        />
        <circle cx="256.003" cy="256" r="96" fill="currentColor" />
      </svg>
    </div>
  </div>

  <!-- Details -->
  <div class="max-w-4xl mx-auto py-10 px-4">
    <article>
      <div class="carousel aura">
        <img :src="imagePath" alt="" class="rounded-xl" />
      </div>

      <div class="mx-auto my-4">
        <div>
          <h3
            class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            purpose
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            I personally think that paying almost
          </p>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">Two</p>
        </div>
        <div>
          <h3
            class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            design
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">Three</p>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">Four</p>
        </div>
        <div>
          <h3
            class="text-jd-header font-jd-title text-3xl mt-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            thoughts
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            This has been and still is one of my favorite projects I've worked on. While it was
            pretty simple, hearing that it has allowed for the Danby Volunteer Fire Company to
            receive over 20 applications (that have since become firefighters! Congrats!) in a few
            short months brings me immense joy. I love being able to help people and small
            communities.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import ProjectLayout from '@/components/ui/ProjectLayout.vue'
const imagePath = new URL('@/assets/images/rutabaga_home.png', import.meta.url).href
</script>
