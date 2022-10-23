<template>
  <div class="card">
    <div
      class="question-intro bounceInRight"
      v-if="actualStep == 0 && !continuedQuestions"
    >
      <p>Vas a contestar estas preguntas</p>
      <img src="../../public/assets/icons/clock-dynamic-color.png" alt="" />
      <button class="button" @click="onContinueButton">Continue</button>
    </div>
    <div
      class="question bounceInRight"
      v-if="actualStep <= actualPersonQuestions.length && continuedQuestions"
    >
      <p>{{ actualPersonQuestions[actualStep].question }}</p>
      <br />
      <div class="buttons">
        <button
          class="button"
          v-for="answer of actualPersonQuestions[actualStep].answers"
          :key="answer"
          :value="answer"
          :id="actualPersonQuestions[actualStep].user_questions_id"
          @click="
            onAnswerQuestion(
              answer,
              actualPersonQuestions[actualStep].user_questions_id
            )
          "
        >
          <span>{{ answer }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PersonQuestions",
  props: {
    actualPersonId: {
      type: Number,
      required: true,
    },
    lockedQuestions: {
      type: Boolean,
      required: true,
    },
    actualPersonQuestions: {
      type: Array as any,
      required: false,
    },
  },
  data() {
    return {
      selectedAnswers: [] as any,
      actualStep: 0,
      continuedQuestions: false,
    };
  },
  onUnmounted() {
    this.selectedAnswers = [];
    this.actualStep = 0;
    this.continuedQuestions = false;
  },
  methods: {
    onContinueAnswers() {
      if (this.actualStep == this.actualPersonQuestions.length - 1) {
        return this.$emit("onFinishQuestions", this.selectedAnswers);
      }
      return this.actualStep++;
    },
    onContinueButton() {
      this.continuedQuestions = true;
      console.log("le doy a continuar");
    },
    onAnswerQuestion(answer, questionId) {
      this.selectedAnswers = this.selectedAnswers.filter(
        (answer) => answer.questionId !== questionId
      );
      this.selectedAnswers.push({ answer, questionId });
      this.styleActiveButton(answer, questionId);
      setTimeout(() => {
        this.onContinueAnswers();
      }, 500);
    },
    styleActiveButton(answer, questionId) {
      const questionButtons = document.querySelectorAll(
        `button[id="${questionId}"]`
      );
      const selectedButton = document.querySelector(
        `button[value="${answer}"][id="${questionId}"]`
      );
      questionButtons.forEach((button) => {
        button.classList.remove("button-active");
      });
      selectedButton.classList.add("button-active");
    },
  },
});
</script>

<style scoped>
* {
  z-index: 1000;
}
p {
  font-family: Poppins;
  font-weight: bolder;
  font-size: 1.2rem;
  padding: 0.5rem;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.question-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  gap: 1rem;
}
.card {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 80vw;
  width: 80%;
  max-height: 80%;
  border-radius: 10%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 20px 60px -30px;
  background: linear-gradient(
    293deg,
    rgb(200, 185, 255) 0%,
    rgb(70, 215, 255) 100%
  );
  overflow-y: scroll;
  padding: 2rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.card::-webkit-scrollbar {
  display: none;
}

.button {
  display: inline-block;
  border-radius: 7px;
  border: none;
  background: #1875ff;
  color: white;
  text-align: center;
  font-size: 13px;
  box-shadow: 0px 14px 56px -11px #1875ff;
  width: 14em;
  padding: 1.2em;
  transition: all 0.4s;
  cursor: pointer;
}
.button-active {
  background-color: #044ebd;
  box-shadow: 0px 14px 56px -11px #044ebd;
}
.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes bounceInRight {
  0%,
  60%,
  75%,
  90%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceInRight {
  0%,
  60%,
  75%,
  90%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
</style>
