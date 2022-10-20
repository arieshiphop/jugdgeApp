import  supabase  from '../helpers/supabase'


export class UserQuestionsService {
    async getQuestionsData(userId) {
        //SELECT * FROM questions WHERE user_id userId INNER JOIN users_questions ON questions.id = users_questions.question_id
        const userIdParsed = parseInt(userId)
        const { data, error } = await supabase
            .from('users_questions')
            .select('questions(*)')
            .eq('user_id', userIdParsed)
        if (error) {
            console.log(error);
        }
        console.log(data);
        return data
    }
}
