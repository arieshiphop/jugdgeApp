<template>
  <div class="container">
    <div
      class="question"
      v-for="question of questions"
      :key="question"
      :id="question.id"
      @click="onQuestionClick(question)"
    >
      <p>{{ question.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserQuestionsService } from "@/services/user.questions.service";
export default defineComponent({
  name: "OnboardingQuestions",
  data() {
    return {
      userQuestionsService: new UserQuestionsService(),
      questions: null,
      maxSelectedQuestions: 3,
      selectedQuestions: [],
    };
  },
  async mounted() {
    this.questions = await this.userQuestionsService.getAllQuestionsTitles();
  },
  methods: {
    onQuestionClick(question) {
      const questionClicked = document.getElementById(question.id);
      if (this.selectedQuestions.length < this.maxSelectedQuestions + 1) {
        if (this.selectedQuestions.includes(question.id)) {
          this.selectedQuestions = this.selectedQuestions.filter(
            (q) => q !== question.id
          );
          return questionClicked.classList.remove("selected");
        }
        this.selectedQuestions.push(question.id);
        console.log(this.selectedQuestions);
        return questionClicked.classList.add("selected");
      }
    },
  },
});
</script>

<style scoped>
.question {
  border-radius: 5%;
  text-align: center;
  background-color: white;
}
.container {
  width: 100%;
  border: 2px solid red;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
}
.selected {
  background-color: #aa4141;
}
</style>
