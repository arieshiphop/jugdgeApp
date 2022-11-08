import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from "@ionic/vue";
import { UsersService } from "./services/users.service";
import AuthService from "./services/auth.service";
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

//Services
const usersService = new UsersService();
const authService = new AuthService();

//Data
const forbiddenRoutes = ["/register"];
const allowedRoutes = ["/home", "/"];
const actualRoute = window.location.pathname;

async function sendUserToCorrectPage(userData) {
  if (userData) {
    router.push("/home");
    console.log("User is logged in");
  } else {
    router.push("/register");
    console.log("User is not logged in");
  }
}

router.isReady().then(async () => {
  app.mount("#app");
  const userData = await usersService.getLoggedUserData();
  // sendUserToCorrectPage(userData);
  if (userData) {
    sessionStorage.setItem("user-data", JSON.stringify(userData.user));
  }
});
