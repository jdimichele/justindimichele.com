<template>
  <Navbar></Navbar>

  <article v-if="blog">
    <header>
      <h1>{{ blog.meta.title }}</h1>
      <time>{{ blog.meta.date }}</time>
    </header>

    <div v-html="blog.body"></div>
  </article>
  <div v-else-if="error">
    <p>Blog not found!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import matter from 'gray-matter'
import Navbar from '@/components/ui/Navbar.vue'

const route = useRoute()
const blog = ref(null)
const error = ref(false)

onMounted(async () => {
  const id = route.params.id
  try {
    const rawFile = await import(`../content/blogs/${id}.md?raw`)
    const { data, content } = matter(rawFile.default)

    blog.value = {
      meta: data,
      body: marked(content),
    }
  } catch (e) {
    error.value = true
  }
})
</script>
