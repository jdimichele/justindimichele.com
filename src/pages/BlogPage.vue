<template>
  <article v-if="blog" class="mx-auto max-w-2-5 pt-28 pb-10">
    <header>
      <router-link
        to="/blog"
        class="text-sm text-jd-muted hover:text-jd-subheader mb-6 inline-block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <!-- Icon from Remix Icon by Remix Design - https://github.com/cyberalien/RemixIcon/blob/master/License -->
          <path
            fill="currentColor"
            d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
          />
        </svg>
      </router-link>

      <div class="flex max-w-3xl mx-auto py-6 justify-between">
        <div class="my-5 text-3xl font-jd-title text-jd-header">
          <h1
            class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
          >
            {{ blog.meta.title }}
          </h1>
        </div>
        <time class="self-center text-jd-muted font-jd-body">{{ blog.meta.date }}</time>
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
