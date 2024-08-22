<template>
  <div class="m-10">
    <div class="p-5">
      <h1 class="mx-20 font-display text-jd-lightbeige animate-bounceInTop text-7xl">
        {{ randomQuote }}
      </h1>
    </div>
    <div class="flex flex-col font-body">
      <div class=" ml-32">
        <h1 class="text-jd-darkblue">My name is Justin.</h1>
      </div>
      <div class="ml-32">
        <h2 class="text-jd-darkblue">I like making things with code.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: ["Hi, how are ya?", "Howdy!", "Hey!", "Hello there!", "Nice to meet you!"],
      randomQuote: "",
    };
  },
  mounted() {
    this.randomJustinism();
  },
  methods: {
    randomJustinism() {
      var rng = Math.floor(Math.random() * this.quotes.length);
      this.randomQuote = this.quotes[rng];
    },
  },
};
</script>
