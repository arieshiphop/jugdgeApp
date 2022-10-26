<template>
  <ion-page>
    <main class="home">
      <start-timer :unlocked-card="unlockedCard" @locked-card="onLockCard" />
      <person-card
        v-if="persons.length > 0"
        :person="actualPerson"
        :unlocked-card="unlockedCard"
        @unlocked-card="onUnlockCard"
      />
      <p v-else>No te quedan juicios disponibles</p>
      <person-questions
        v-if="!lockedQuestions"
        :actualPersonId="actualPerson.id"
        :lockedQuestions="lockedQuestions"
        :actualPersonQuestions="actualPersonQuestions"
        @onFinishQuestions="onFinishQuestions"
      />
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
import PersonQuestions from "@/components/PersonQuestions.vue";
export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    PersonCard,
    StartTimer,
    PersonQuestions,
  },
  data() {
    return {
      unlockedCard: false,
      persons: [] as Person[],
      actualPerson: {} as Person,
      userQuestionsService: new UserQuestionsService(),
      lockedQuestions: true,
      usersService: new UsersService(),
      actualPersonQuestions: [],
    };
  },
  watch: {
    actualPerson: async function () {
      let questions = await this.userQuestionsService.getQuestionsData(
        this.actualPerson.id
      );
      this.actualPersonQuestions = questions;
    },
  },
  methods: {
    async getPersons() {
      this.usersService.getUsersData().then((response: any) => {
        this.persons = response;
        this.actualPerson = this.persons[0];
      });
    },
    async onUnlockCard(value: boolean) {
      this.unlockedCard = value;
    },
    onLockCard(value: boolean) {
      this.unlockedCard = value;
      this.lockedQuestions = false;
    },
    onFinishQuestions() {
      this.lockedQuestions = true;
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
