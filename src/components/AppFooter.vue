<template>
  <ion-footer>
    <ion-toolbar class="centered">
      <ion-title class="ion-text-center">
        <router-link to="/">
          <ion-icon :icon="planetSharp" color="dark"></ion-icon>
        </router-link>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonFooter, IonToolbar, IonIcon, IonTitle } from "@ionic/vue";
import { planetSharp } from "ionicons/icons";

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
      planetSharp,
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
  --background: #c09d2b79;
  --box-shadow: none;
}
ion-icon {
  /* margin: 0 1rem; */
  font-size: 2.5rem;
}
</style>
