import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import i18n from "./i18n";

const app = createApp(App);
app.use(VueScrollTo);
app.use(i18n);
app.mount("#app");
