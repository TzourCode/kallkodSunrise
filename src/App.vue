<script>
import Sunrise from "./components/Sunrise.vue";
import Space from "./components/Space.vue";
import nysida from "./components/nysida.vue";
import Den from "./views/den.vue";
import Props from "./components/props.vue";

export default {
  components: {
    Sunrise,
    nysida,
    Space,
    Den,
    Props,
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
  <Props
    sunup="sunrise"
    sundown="sunset"
    city="Gothenburg"
    :population="583056"
  ></Props>
  <Sunrise />
</template>
