<template>
  <ProjectLayout
    title="Danby Volunteer Fire Company"
    summary="An informational website made for the Danby Fire Department of New York."
    website="https://danbyfiredept.org/"
    github="https://github.com/jdimichele/DanbyFireDept"
  >
  </ProjectLayout>
  <div>
    <article class="max-w-4xl mx-auto py-10 px-4">
      <div class="carousel">
        <img :src="imagePath" alt="" class="rounded-2xl" />
      </div>
    </article>
  </div>
</template>

<script setup>
import ProjectLayout from '@/components/ui/ProjectLayout.vue'
const imagePath = new URL('@/assets/images/dvfc_home.png', import.meta.url).href
</script>
