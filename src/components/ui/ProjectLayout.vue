<template>
  <article class="max-w-4xl mx-auto py-10 px-4">
    <div class="mb-8">
      <router-link
        to="/projects"
        class="hover:text-jd-subheader text-jd-muted inline-flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          class="size-6"
        >
          <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE -->
          <path
            fill="currentColor"
            d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"
          /></svg
        >projects
      </router-link>
    </div>

    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex flex-col">
        <h1 class="text-4xl sm:text-5xl text-jd-header tracking-wide">
          {{ title }}
        </h1>
        <p class="text-lg text-jd-muted mt-2">
          {{ summary }}
        </p>
      </div>

      <div class="flex items-center gap-6 whitespace-nowrap">
        <a
          v-if="website"
          :href="website"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-jd-muted text-jd-subheader inline-flex items-center gap-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            class="inline-block"
          >
            <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE -->
            <path
              fill="currentColor"
              d="M162.84 93.16a4 4 0 0 1 0 5.66l-64 64a4 4 0 0 1-5.66-5.66l64-64a4 4 0 0 1 5.66 0m49.95-49.95a52.07 52.07 0 0 0-73.56 0l-30.06 30.06a4 4 0 0 0 5.65 5.66l30.07-30.06a44 44 0 0 1 62.24 62.24l-30.07 30.06a4 4 0 0 0 5.66 5.66l30.07-30.06a52.07 52.07 0 0 0 0-73.56m-71.62 133.85l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"
            />
          </svg>
        </a>
      </div>
      <a
        v-if="github"
        :href="github"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-jd-muted text-jd-subheader inline-flex items-center gap-1 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
          <path
            fill="currentColor"
            d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"
          />
        </svg>
      </a>
    </div>

    <div class="space-y-8 text-jd-body">
      <slot />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    default: '',
  },
})
</script>
