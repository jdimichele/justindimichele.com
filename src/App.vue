<template>
  <NavBar></NavBar>

  <BaseCard>
    <TheGreetings></TheGreetings>
  </BaseCard>

  <AboutMe></AboutMe>

  <MyExperience></MyExperience>
</template>

<script>
import AboutMe from "./components/sections/AboutMe.vue";
import MyExperience from "./components/sections/MyExperience.vue";
import TheGreetings from "./components/sections/TheGreetings.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import NavBar from "./components/interactive/NavBar.vue";

export default {
  components: {
    AboutMe,
    MyExperience,
    TheGreetings,
    BaseCard,
    NavBar,
  },
};
</script>
