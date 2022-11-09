<template>
  <ion-page>
    <main class="body">
      <onboarding-intro v-if="actualStep == 0" />
      <onboarding-form v-if="actualStep == 1" />
      <onboarding-questions v-if="actualStep == 2" />
      <onboarding-audio v-if="actualStep == 3" />
      <button @click="nextStep">
        Continuar
        <img src="../../public/assets/icons/button-continue.svg" alt="" />
      </button>
    </main>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import OnboardingIntro from "@/components/OnboardingIntro.vue";
import OnboardingForm from "@/components/OnboardingForm.vue";
import OnboardingQuestions from "@/components/OnboardingQuestions.vue";
import OnboardingAudio from "@/components/OnboardingAudio.vue";
export default defineComponent({
  name: "OnboardingPage",
  components: {
    IonPage,
    OnboardingIntro,
    OnboardingForm,
    OnboardingQuestions,
    OnboardingAudio,
  },
  data() {
    return {
      actualStep: 0,
    };
  },
  methods: {
    nextStep() {
      return this.actualStep++;
    },
  },
});
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  outline: 0;
  font-size: 18px;
  background: white;
  color: dodgerblue;
}

img {
  margin: 0 0 0 10px;
}

button:hover svg {
  margin: 0 0 0 25px;
  transition: 0.3s;
}

button:not(:hover) svg {
  transition: 0.3s;
}

button:active {
  transform: scale(0.9, 0.9);
  transition: 200ms;
}

button:not(:active) {
  transition: 200ms;
}

.body {
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #5433ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5433ff,
    #20bdff,
    #a5fecb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5433ff,
    #20bdff,
    #a5fecb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
