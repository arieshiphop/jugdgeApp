<template>
  <ion-footer class="ion-no-border">
    <ion-toolbar class="centered">
      <ion-title class="ion-text-center">
        <router-link to="/">
          <ion-icon :icon="planetOutline" class="selected-icon-"></ion-icon>
        </router-link>
        <router-link to="/">
          <ion-icon :icon="personOutline" color="dark"></ion-icon>
        </router-link>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonFooter, IonToolbar, IonIcon, IonTitle } from "@ionic/vue";
import { planetOutline, personOutline } from "ionicons/icons";

export default defineComponent({
  name: "PersonCard",
  components: {
    IonFooter,
    IonToolbar,
    IonIcon,
    IonTitle,
  },
  setup() {
    return {
      planetOutline,
      personOutline,
    };
  },
});
</script>

<style scoped>
.footer-icon {
  width: 70px;
  height: 70px;
  padding: 1rem;
}
ion-toolbar {
  --background: hsl(0deg 0% 100%);
  --box-shadow: none;
}
ion-icon {
  margin: 0 1rem;
  font-size: 2.5rem;
}
.selected-icon {
  color: var(--ion-color-primary);
}
</style>
