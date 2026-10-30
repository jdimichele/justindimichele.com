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
              Something I wasn't familiar with was that a lot of communities and cities in rural
              towns don't have the funding for a fully equipped fire department and resort to
              donations and staffing firefighters through community outreach. One such place is a
              city in New York called Danby.
            </p>
            <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
              A friend of mine who lives in Danby joined the fire department and realized that there
              was a need for staffing and a need for updating their website. With that in mind, I
              offered to help make the website for them, free of charge. I wanted to make sure that
              the website was a clean informational website that allowed people in the community to
              find relevant information for services, order number signs for mailboxes, or sign up
              for firefighting duty in a straightforward way.
            </p>
          </div>
          <div>
            <h3
              class="text-jd-header font-jd-title text-3xl mb-3 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
            >
              design
            </h3>
            <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
              I decided early on that I wanted the website to be as simple as possible, while being
              clear that it is a website made for informational content and a fire department's
              website as well, but a touch of modern design wouldn't hurt either!
            </p>
            <p class="font-jd-body text-jd-body text-lg pb-5 indent-5">
              With that being said, I chose the combination of Vue and Firebase for the quick and
              easy way to get the website up and running. I made sure to make both the desktop and
              mobile view of the website easily navigable for all users, as well as using as many
              WCAG compliant accessibilty features in mind and where ever they would be best
              applied. As for any of the UI elements, most of all of it was handled with TailwindCSS
              to give it a bit more of a modern feel.
            </p>
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
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from '@/components/ui/ProjectLayout.vue'
const imagePath = new URL('@/assets/images/dvfc_home.png', import.meta.url).href
</script>
