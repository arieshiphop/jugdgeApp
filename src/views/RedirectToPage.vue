<template>
  <ion-page></ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage } from "@ionic/vue";
import { UsersService } from "@/services/users.service";
import Auth from "@/services/auth.service";

export default defineComponent({
  name: "RedirectToPage",
  components: {
    IonPage,
  },
  data() {
    return {
      usersService: new UsersService(),
      auth: new Auth(),
      user: null,
    };
  },
  async created() {
    this.user = await this.usersService.getLoggedUserData();
  },
  watch: {
    user: {
      handler: async function (newVal, oldVal) {
        if (await this.usersService.userExists(newVal)) {
          console.log("user exists");
          this.$router.push("/home");
        } else {
          console.log("user does not exist");
          this.$router.push("/onboarding");
        }
      },
      deep: true,
    },
  },
});
</script>

<style scoped></style>
