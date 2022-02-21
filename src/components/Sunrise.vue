<script>
export default {
  created() {
    fetch("https://api.sunrise-sunset.org/json?lat=57.708870&lng=-11.974560")
      .then((response) => response.json())
      .then((result) => {
        this.results = result;
        console.log(result);
        console.log(result.status);
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
    <p>The request was {{ results.status }}</p>
  </h3>
</template>
