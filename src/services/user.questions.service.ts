import supabase from "../helpers/supabase";

export class UserQuestionsService {
  async getQuestionsData(userId) {
    //SELECT * FROM questions WHERE user_id userId INNER JOIN users_questions ON questions.id = users_questions.question_id
    const { data, error } = await supabase
      .from("users_questions")
      .select("questions(*)")
      .eq("user_id", userId);
    if (error) {
      console.log(error);
    }
    return this.proccesQuestions(data);
  }
  proccesQuestions(results) {
    const questionsList = [] as any;
    for (const question of results) {
      const questionData = JSON.parse(question.questions.question);
      const answers = Object.values(questionData)[0];
      const questionObject = {
        question: Object.keys(questionData)[0],
        answers: this.proccesAnswersList(answers),
        user_questions_id: question.questions.id,
      };
      questionsList.push(questionObject);
    }
    return questionsList;
  }
  proccesAnswersList(answers) {
    const answersList = answers.replace(/['"]+/g, "").replace(/[[\]']+/g, "");
    const answersListSplitted = answersList.split(",");
    return answersListSplitted;
  }
  async getAllQuestionsTitles() {
    const { data, error } = await supabase.from("questions").select("title,id");
    if (error) {
      console.log(error);
    }
    console.log(data);
    return data;
  }
}
