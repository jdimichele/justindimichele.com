<template>
  <Navbar></Navbar>

  <div class="mx-auto max-w-2-5 my-10">
    <div class="my-10">
      <div class="my-5 text-4xl font-jd-title text-jd-header">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          About
        </h1>
      </div>

      <div class="my-5">
        <p class="text-xl font-jd-body text-jd-body">
          Hey there, I'm Justin. I'm a software engineer with years of quality engineering behind
          me. I love making apps, websites, and video games. Quality is something I care a lot about
          in all my endeavors and strive to make it known in all of them.
        </p>
      </div>
    </div>

    <div class="my-10">
      <div class="my-5 text-4xl font-jd-title text-jd-header">
        <h1
          class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-jd-header after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
        >
          Skills
        </h1>
      </div>

      <div class="">
        <ul class="text-xl font-jd-body text-jd-cool-steel">
          <div class="my-4">
            <h3 class="text-jd-subheader">Languages:</h3>
            <li class="text-jd-body">
              Java <span class="text-jd-muted">/</span> C#
              <span class="text-jd-muted">/</span> JavaScript
              <span class="text-jd-muted">/</span> TypeScript
            </li>
          </div>
          <div class="my-4">
            <h3 class="text-jd-subheader">Frameworks:</h3>
            <li class="text-jd-body">
              Vue.js <span class="text-jd-muted">/</span> Node.js
              <span class="text-jd-muted">/</span> .NET
            </li>
          </div>
          <div class="my-4">
            <h3 class="text-jd-subheader">Server-Side:</h3>
            <li class="text-jd-body">
              PostgreSQL <span class="text-jd-muted">/</span> Firebase
              <span class="text-jd-muted">/</span> Supabase
            </li>
          </div>
          <div class="my-4">
            <h3 class="text-jd-subheader">Tools:</h3>
            <li class="text-jd-body">
              Docker <span class="text-jd-muted">/</span> Kubernetes
              <span class="text-jd-muted">/</span> OpenShift
              <span class="text-jd-muted">/</span> AWS
            </li>
          </div>
          <div class="my-4">
            <h3 class="text-jd-subheader">AI:</h3>
            <li class="text-jd-body">
              Claude Code <span class="text-jd-muted">/</span> Windsurf & Devin
              <span class="text-jd-muted">/</span> Gemini
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>
