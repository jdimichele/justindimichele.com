<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <div class="max-w-3xl mx-auto py-6">
      <div>
        <component :is="currentProjectComponent" v-if="currentProjectComponent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = route.params.id
const projectComponents = import.meta.glob('@/content/projects/*.vue')

const currentProjectComponent = computed(() => {
  const matchingPath = Object.keys(projectComponents).find((path) =>
    path.toLowerCase().endsWith(`/${projectId.toLowerCase()}.vue`),
  )
  return matchingPath ? defineAsyncComponent(projectComponents[matchingPath]) : null
})
</script>
