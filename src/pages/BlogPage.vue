<template>
  <Navbar></Navbar>

  <article v-if="blog">
    <header>
      <div>
        <div class="my-10">
          <div class="my-5 text-3xl font-jd-title text-jd-header">
            <h1
              class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
            >
              {{ blog.meta.name }}
            </h1>
          </div>
        </div>
        <time>{{ blog.meta.date }}</time>
      </div>
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
