<template>
  <ion-header class="ion-no-border">
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
