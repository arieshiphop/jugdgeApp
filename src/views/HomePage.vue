<template>
  <ion-page>
    <main class="home">
      <start-timer
        :unlocked-card="unlockedCard"
        @locked-card="setLockedCardValue"
      />
      <person-card
        v-if="persons.length > 0"
        :person="actualPerson"
        :unlocked-card="unlockedCard"
        @unlocked-card="setUnlockedCardValue"
      ></person-card>
      <p v-else>No te quedan juicios disponibles</p>
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
      persons: [
        {
          id: 1,
          name: "Jose Luis",
          ubication: "Bilbao",
          picture:
            "https://www.okchicas.com/wp-content/uploads/2020/10/los-modelos-mas-guapos-y-exitosos-del-2020-1.png",
        },
        {
          id: 2,
          name: "Josefino",
          ubication: "Zaragoza",
          picture:
            "https://i.pinimg.com/550x/ca/36/cc/ca36cce3d4ca947e5f3eaf39c4b3bf7e.jpg",
        },
      ],
      actualPerson: {
        id: 0,
        name: "",
        ubication: "",
        picture: "",
      },
    };
  },
  methods: {
    setUnlockedCardValue(value: boolean) {
      this.unlockedCard = value;
    },
    setLockedCardValue(value: boolean) {
      this.unlockedCard = value;
      this.changePerson();
    },
    changePerson() {
      const actualPersonIndex = this.persons.indexOf(this.actualPerson);
      if (actualPersonIndex > -1) {
        this.persons.splice(actualPersonIndex, 1);
      }
      this.actualPerson = this.persons[0];
    },
  },
  mounted() {
    this.actualPerson = this.persons[0];
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
