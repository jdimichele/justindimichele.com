<template>
  <NavBar></NavBar>

  <BaseCard>
    <TheGreetings></TheGreetings>
  </BaseCard>

  <AboutMe></AboutMe>
</template>

<script>
import AboutMe from "./components/sections/AboutMe.vue";
import TheGreetings from "./components/sections/TheGreetings.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import NavBar from "./components/interactive/NavBar.vue";

export default {
  components: {
    AboutMe,
    TheGreetings,
    BaseCard,
    NavBar,
  },
};
</script>
