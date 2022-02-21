<script>
export default {
  data() {
    return {
      textarea: "",
      picture:
        "https://img.xcitefun.net/users/2014/07/361487,xcitefun-nature-color-5.jpg",
      someColor: "pink",
    };
  },
};
</script>

<template>
  <img style="width: 100%" :src="picture" alt="Bild på en solnedgång" />
  <input v-model.lazy="textarea" type="text" />
  <label :style="{ color: someColor }">Press enter to display textinput.</label>
  <p>{{ textarea }}</p>
</template>
