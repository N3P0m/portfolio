import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./scss/normalize.css";
import "./scss/index.scss";
import components from "@/components/UI-copmonents/index.js";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
