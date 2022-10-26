import supabase from "../helpers/supabase";

export default class AuthService {
  async loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log(error);
    }
    return data;
  }
  async logOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    return error;
  }
}
