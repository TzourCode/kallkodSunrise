<script>
export default {
  created() {
    fetch("https://api.sunrise-sunset.org/json")
      .then((response) => response.json())
      .then((result) => {
        this.results = result;
        console.log(result);
      });
  },
  data() {
    return { results: null };
  },
};
</script>

<template>
  <h3 v-if="results !== null">
    <p v-for="(value, name, index) in results.results">
      {{ index }} {{ name }} {{ value }}
    </p>
  </h3>
</template>
