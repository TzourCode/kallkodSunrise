<script>
export default {
  data() {
    return { textarea: "" };
  },
  data() {
    return {
      picture:
        "https://img.xcitefun.net/users/2014/07/361487,xcitefun-nature-color-5.jpg",
    };
  },
};
</script>

<template>
  <img style="width: 100%" :src="picture" alt="" />
  <input v-model.lazy="textarea" type="text" />
  <label>Press enter to display textinput.</label>
  <p>{{ textarea }}</p>
</template>
