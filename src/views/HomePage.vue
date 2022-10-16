<template>
  <ion-page>
    <main class="home">
      <start-timer
        :unlocked-card="unlockedCard"
        @locked-card="setLockedCardValue"
      />
      <person-card
        :person="{
          name: 'Jose Luis',
          ubication: 'Bilbao',
          picture:
            'https://www.okchicas.com/wp-content/uploads/2020/10/los-modelos-mas-guapos-y-exitosos-del-2020-1.png',
        }"
        :unlocked-card="unlockedCard"
        @unlocked-card="setUnlockedCardValue"
      ></person-card>
    </main>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage } from "@ionic/vue";
import PersonCard from "../components/PersonCard.vue";
import StartTimer from "@/components/StartTimer.vue";
export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    PersonCard,
    StartTimer,
  },
  data() {
    return {
      unlockedCard: false,
    };
  },
  methods: {
    setUnlockedCardValue(value: boolean) {
      this.unlockedCard = value;
    },
    setLockedCardValue(value: boolean) {
      this.unlockedCard = value;
    },
  },
});
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
