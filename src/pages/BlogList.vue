<template>
  <Navbar></Navbar>

  <div class="mx-auto max-w-2-5 my-10">
    <div class="my-10">
      <div class="my-5 text-3xl font-jd-title text-jd-old-gold">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-jd-old-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          Blog
        </h1>
      </div>
    </div>

    <div class="mx-auto my-10">
      <article v-for="item in blogs" :key="item.id" class="flex">
        <router-link :to="`/blog/${item.id}`">
          <h2 class="font-jd-title text-2xl text-jd-wisteria">{{ item.meta.title }}</h2>
        </router-link>
        <time>{{ item.meta.date }}</time>
        <p>{{ item.meta.summary }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
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
