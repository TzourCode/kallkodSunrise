<script>
export default {
  data() {
    return {
      names: [null],
    };
  },
  methods: {
    onClick() {
      this.names = [
        "Giuliana Bates",
        "Angelina Garrett",
        "Lance Kane",
        "Ishaan Beard",
        "Maddox Petty",
        "Sam Hansen",
        "Kobe Armstrong",
        "Corinne Randall",
        "Kiley Summers",
        "Dulce Howell",
        "Marissa Kaiser",
        "Karissa Frye",
        "------------------------------",
      ];
    },
  },
};
</script>

<style lang="scss">
div {
  background-color: rgb(170, 255, 188);

  p {
    background-color: rgb(40, 26, 167);
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
  }
}
h1 {
  background: content-box radial-gradient(crimson, skyblue);
}
</style>

<template>
  <input @click="onClick" type="button" value="v-on button" />
  <label>Display different names</label>
  <div>
    <p v-for="nam in names">{{ nam }}</p>
  </div>
</template>
