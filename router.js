import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from "./src/views/den.vue";
import ContactView from "./src/views/kan.vue";
import HomeView from "./src/views/hem.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/Μὶπος",
    },
    {
      component: ContactView,
      path: "/Δεν ξὲρω",
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});
