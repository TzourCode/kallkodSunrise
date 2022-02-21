<script>
export default {
  name: "propsstuff",
  props: {
    sunup: String,
    sundown: String,
    city: String,
    population: Number,
  },
};
</script>

<template>
  <h2>
    This shows the {{ sunup }} and the {{ sundown }} of {{ city }}.<br />
    {{ city }} has a population of {{ population }} people.
  </h2>
</template>
