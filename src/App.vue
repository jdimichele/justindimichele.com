<template>
  <NavBar></NavBar>

  <TheGreetings></TheGreetings>

  <AboutMe></AboutMe>

  <MyExperience></MyExperience>
</template>

<script>
import AboutMe from "./components/sections/AboutMe.vue";
import MyExperience from "./components/sections/MyExperience.vue";
import TheGreetings from "./components/sections/TheGreetings.vue";
import NavBar from "./components/interactive/NavBar.vue";

export default {
  components: {
    AboutMe,
    MyExperience,
    TheGreetings,
    NavBar,
  },
};
</script>
