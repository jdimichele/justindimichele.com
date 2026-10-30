<template>
  <ProjectLayout
    title="Rutabaga"
    summary="Because no one should have to pay THAT much money for a recipe app."
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
        <div class="mb-10">
          <h3
            class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            purpose
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            I believe that paying a subscription for convenience <i>can</i> make sense for certain
            apps. I also believe that the app should have the features that other basic apps on the
            market should have as well. Such as categorizing, easy ways to search for recipes, and
            the ability to add your own. My wife mentioned these issues (along with a few other ones
            that NYTCooking app didn't have in 2020) and I thought it would be a fun project to take
            up and work on. This project is where I learned Vue.js, Google Firebase, and the Ionic
            Framework.
          </p>
        </div>
        <div class="mb-10">
          <h3
            class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            design
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            Much like my other web-based projects, I always like to add on some new technology and
            see where I can leverage that as part of my development process. I always love learning
            new things! In this case, I learned three new technologies that were all used in this
            app!
          </p>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            I like making things simple, so I tried to keep the UX/UI similar to other recipe apps I
            had found online. NYTCooking does have a great layout for recipe cards, so I used that
            as heavy inspiration for my recipe layout, along with a few other popular apps. A few
            features that I wanted Rutabaga to have, along with the grievances my wife had, was the
            following:
          </p>
          <div class="ml-7">
            <ul class="list list-disc font-jd-body text-lg text-jd-body pb-2">
              <li>
                Ability to quickly find the last recipe you had open (preferrably on the home
                screen)
              </li>
              <li>Ability to add recipes, with pictures and categorize them</li>
              <li>Ability to upload recipes from a URL (like a Google Sheet)</li>
            </ul>
          </div>
        </div>
        <div class="mb-10">
          <h3
            class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            tech
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            Vue.js was easy to pickup, so I won't drone on about that too much (even though
            I really love Vue). Firebase was my first real foray into NoSQL, so there was a slight
            learning curve, but it was something that I felt I understood quickly due to knowing
            basic data and database structures. It's all really just nicely wrapped in a JSON format
            at the end of the day.
          </p>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            Ionic was the largest learning curve of the three. I'd never worked with a
            multi-platform app framework before and at the time (2020), it was just starting to add
            support for Angular, React, and Vue.js. Support for Vue at the time felt a little
            lackluster and I was planning to have this work easily on desktop and mobile,
            specifically iPhone for my wife, and that came with a lot of other fun challenges that
            Apple likes to add onto their app release process.
          </p>
        </div>
        <div>
          <h3
            class="text-jd-header font-jd-title text-3xl mt-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            thoughts
          </h3>
          <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
            Ultimately, I'm pretty happy with the way Rutabaga has turned out, and most importantly, so is my wife! There are a lot of improvements and changes I'd like to make in the future, specifically with the UX, the UI (layouts for some of the page views), and some additional features that I think would really make the app come together. Stay tuned for those updates. :)
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
