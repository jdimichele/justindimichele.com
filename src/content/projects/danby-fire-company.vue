<template>
  <ProjectLayout
    title="Danby Volunteer Fire Company"
    summary="An informational website made for the Danby Fire Department of New York."
    website="https://danbyfiredept.org/"
    github="https://github.com/jdimichele/DanbyFireDept"
  >
    <div>
      <article class="max-w-4xl mx-auto py-10 px-4">
        <div class="carousel aura">
          <img :src="imagePath" alt="" class="rounded-xl" />
        </div>

        <div>
          <h1>Purpose:</h1>
          <p>This started because Derek asked me to make him a website.</p>
        </div>
      </article>
    </div>
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from '@/components/ui/ProjectLayout.vue'
const imagePath = new URL('@/assets/images/dvfc_home.png', import.meta.url).href
</script>
