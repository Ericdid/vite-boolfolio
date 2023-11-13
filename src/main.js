import { createApp } from "vue";
import "./assets/scss/style.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");
