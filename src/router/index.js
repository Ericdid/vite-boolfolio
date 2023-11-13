import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import portfolio from "../pages/portfolio.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: portfolio,
    },
  ],
});

export { router };
