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
import PersonCard from "@/components/PersonCard.vue";
import StartTimer from "@/components/StartTimer.vue";
import { UsersService } from "@/services/users.service";
import { UserQuestionsService } from "@/services/user.questions.service";
import Person from "@/models/person.model";
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
      persons: [] as Person[],
      actualPerson: {} as Person,
      userQuestionsService: new UserQuestionsService(),
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
    getPersons() {
      const usersService = new UsersService();
      usersService.getUsersData().then((response: any) => {
        this.persons = response;
        this.actualPerson = this.persons[0];
        this.userQuestionsService.getQuestionsData(this.actualPerson.id);
      });
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
    this.getPersons();
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
