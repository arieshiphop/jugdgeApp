<template>
  <ion-app>
    <app-header />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <app-footer />
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
import AppHeader from "./components/AppHeader.vue";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    AppFooter,
    AppHeader,
    IonRouterOutlet,
    IonFooter,
    IonToolbar,
    IonContent,
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
