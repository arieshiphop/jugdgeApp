<template>
  <ion-app>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <app-footer></app-footer>
  </ion-app>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonToolbar,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    AppFooter,
    IonRouterOutlet,
    IonFooter,
    IonToolbar,
    IonContent,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
</style>
