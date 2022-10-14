<template>
  <ion-page>
    <person-card
      :person="{
        name: 'Jose Luis',
        ubication: 'Bilbao',
        picture:
          'https://www.okchicas.com/wp-content/uploads/2020/10/los-modelos-mas-guapos-y-exitosos-del-2020-1.png',
      }"
    ></person-card>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage } from "@ionic/vue";
import PersonCard from "../components/PersonCard.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    PersonCard,
  },
  setup() {
    return {
      // ellipse,
      // square,
      // triangle,
    };
  },
});
</script>

<style></style>
