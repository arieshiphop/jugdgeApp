import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from "@ionic/vue";
import { UsersService } from "./services/users.service";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const app = createApp(App).use(IonicVue).use(router);
const usersService = new UsersService();

async function getUserData() {
  const userData = await usersService.getLoggedUserData();
  return userData;
}

function sendUserToCorrectPage(userData) {
  if (userData.user) {
    router.push("/home");
  } else {
    router.push("/register");
  }
}
router.isReady().then(async () => {
  app.mount("#app");
  const userData = await getUserData();
  sendUserToCorrectPage(userData);
});
