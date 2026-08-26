<template>
  <div class="stars-bg" aria-hidden="true">
    <div ref="stars1" class="star-layer stars-small"></div>
    <div ref="stars2" class="star-layer stars-medium"></div>
  </div>
</template>

<script setup>
/* Thank you to jaykdoe for the idea of the background found at:
    https://uiverse.io/jaykdoe/tasty-dragon-12 !
*/
import { ref, onMounted } from 'vue'

const stars1 = ref(null)
const stars2 = ref(null)

function generateJitteredStars(count, width, height) {
  const shadows = []

  const columns = Math.ceil(Math.sqrt(count))
  const rows = Math.ceil(count / columns)

  const cellWidth = width / columns
  const cellHeight = height / rows

  for (let i = 0; i < count; i++) {
    const col = i % columns
    const row = Math.floor(i / columns)

    const x = Math.floor(col * cellWidth + Math.random() * cellWidth)
    const y = Math.floor(row * cellHeight + Math.random() * cellHeight)

    shadows.push(`${x}px ${y}px #FFF`)
  }

  return shadows.join(', ')
}

function initStarfield() {
  const maxScreenWidth = Math.max(window.innerWidth, window.screen.width, 3840)
  const canvasHeight = 2000

  const smallStarsShadows = generateJitteredStars(600, maxScreenWidth, canvasHeight)
  const mediumStarsShadows = generateJitteredStars(180, maxScreenWidth, canvasHeight)

  if (stars1.value) {
    stars1.value.style.setProperty('--star-shadows', smallStarsShadows)
  }
  if (stars2.value) {
    stars2.value.style.setProperty('--star-shadows', mediumStarsShadows)
  }
}

onMounted(() => {
  initStarfield()
})
</script>

<style scoped>
.stars-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

.star-layer {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: var(--star-shadows);
}

.star-layer::after {
  content: ' ';
  position: absolute;
  top: 2000px;
  background: transparent;
  box-shadow: var(--star-shadows);
}

.stars-small {
  width: 1px;
  height: 1px;
  animation: animStar 50s linear infinite;
}

.stars-small::after {
  width: 1px;
  height: 1px;
}

.stars-medium {
  width: 2px;
  height: 2px;
  animation: animStar 100s linear infinite;
}

.stars-medium::after {
  width: 2px;
  height: 2px;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
