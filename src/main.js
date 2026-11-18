import { createApp } from "vue";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/plus-jakarta-sans";
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";
import reveal from "./directives/reveal";

createApp(App).use(router).directive("reveal", reveal).mount("#app");
