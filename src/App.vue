<script>
import Sunrise from "./components/Sunrise.vue";
import Space from "./components/Space.vue";
import nysida from "./components/nysida.vue";

export default {
  components: {
    Sunrise,
    nysida,
    Space,
  },
};
</script>

<template>
  <main>
    <RouterView />
  </main>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Σπὶτι</RouterLink>
      </li>
      <li>
        <RouterLink to="/Μὶπος">Μὶπος</RouterLink>
      </li>
      <li>
        <RouterLink to="/Δεν ξὲρω">Δεν ξὲρω</RouterLink>
      </li>
    </ul>
  </nav>
  <nysida></nysida>
  <Space />
  <Sunrise />
</template>
