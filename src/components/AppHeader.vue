<template>
  <ion-header class="ion-no-border" v-if="canBeShowed">
    <ion-toolbar class="centered">
      <ion-title class="ion-text-center"> Titulo ejemplo </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  data() {
    return {
      canBeShowed: false,
    };
  },
  watch: {
    $route() {
      this.canBeShowed = !["/onboarding"]!.includes(window.location.pathname);
    },
  },
});
</script>

<style scoped>
ion-toolbar {
  --background: hsl(0deg 0% 100%);
  --box-shadow: none;
}
ion-title {
  color: var(--ion-color-primary);
}
</style>
