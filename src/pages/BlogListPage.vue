<template>
  <div class="mx-auto max-w-2-5 pt-28 pb-10">
    <div class="">
      <div class="my-5 text-4xl font-jd-title text-jd-header">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          blog
        </h1>
      </div>
    </div>

    <!-- Temp holding spot for future blogs. -->
    <h3 class="text-2xl text-jd-subheader">No blogs... yet!</h3>
    <div class="mx-auto my-10 flex flex-col gap-6">
      <article v-for="item in blogs" :key="item.id" class="flex flex-col">
        <div class="flex items-baseline gap-20">
          <router-link :to="`/blog/${item.id}`">
            <h2
              class="font-jd-title text-2xl text-jd-subheader relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-subheader after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
            >
              {{ item.meta.title }}
            </h2>
          </router-link>

          <time class="text-sm text-jd-muted whitespace-nowrap">
            {{ item.meta.date }}
          </time>
        </div>

        <p class="text-sm text-jd-body mt-1">
          {{ item.meta.summary }}
        </p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import matter from 'gray-matter'

const blogs = ref([])

onMounted(async () => {
  const modules = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' })
  const loadedBlogs = []

  for (const path in modules) {
    const rawContent = await modules[path]()
    const { data } = matter(rawContent)
    const id = path.split('/').pop().replace('.md', '')

    loadedBlogs.push({
      id,
      meta: data || {},
    })
  }
  blogs.value = loadedBlogs.sort((a, b) => {
    const dateA = a.meta.date ? new Date(a.meta.date) : 0
    const dateB = b.meta.date ? new Date(b.meta.date) : 0
    return dateB - dateA
  })
})
</script>
