<template>
  <ion-footer class="ion-no-border" v-if="canBeShowed">
    <ion-toolbar class="centered">
      <ion-title class="ion-text-center">
        <router-link
          :to="icon.path"
          v-for="icon of icons"
          :key="icon.path"
          @click="setActiveFooterIcon(icon)"
        >
          <ion-icon
            :icon="icon.icon"
            class="selected-icon"
            :color="icon.color"
          ></ion-icon>
        </router-link>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonFooter, IonToolbar, IonIcon, IonTitle } from "@ionic/vue";
import { planetOutline, personOutline } from "ionicons/icons";
import { UsersService } from "@/services/users.service";
export default defineComponent({
  name: "PersonCard",
  components: {
    IonFooter,
    IonToolbar,
    IonTitle,
    IonIcon,
  },
  data() {
    return {
      canBeShowed: false,
      icons: [
        {
          icon: planetOutline,
          color: "primary",
          path: "/home",
        },
        {
          icon: personOutline,
          color: "dark",
          path: "/profile",
        },
      ],
    };
  },
  watch: {
    $route() {
      this.canBeShowed = !["/register", "/onboarding"]!.includes(
        window.location.pathname
      );
    },
  },
  methods: {
    setActiveFooterIcon(icon) {
      icon.color = "primary";
      this.deleteColorFromIcons(icon);
    },
    deleteColorFromIcons(icon) {
      this.icons.forEach((element) => {
        if (element.path != icon.path) {
          element.color = "dark";
        }
      });
    },
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
