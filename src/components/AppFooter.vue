<template>
  <ion-footer>
    <ion-toolbar class="ion-text-justify">
      <router-link to="/">
        <img
          class="footer-icon"
          src="../../public/assets/icons/id-card.svg"
          alt=""
        />
      </router-link>
      <router-link to="/">
        <img
          class="footer-icon"
          src="../../public/assets/icons/heart.svg"
          alt=""
        />
      </router-link>
      <router-link to="/">
        <img
          class="footer-icon"
          src="../../public/assets/icons/cards-icon-1.png"
          alt=""
        />
      </router-link>
      <router-link to="/">
        <img
          class="footer-icon"
          src="../../public/assets/icons/cards-icon-1.png"
          alt=""
        />
      </router-link>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonFooter, IonToolbar } from "@ionic/vue";

export default defineComponent({
  name: "PersonCard",
  components: {
    IonFooter,
    IonToolbar,
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
  --background: none;
  /* delete box shadow from ionic */
  --box-shadow: none;
}
</style>
