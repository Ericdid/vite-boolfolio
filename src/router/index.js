import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import portfolio from "../pages/portfolio.vue";
import detail from "../pages/project-detail.vue";

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
    {
      name: "detail",
      path: "/portfolio/:id",
      component: detail,
    },
  ],
});

export { router };
