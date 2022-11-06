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
  async registerUser(userData) {
    const { data, error } = await supabase.from("users").insert([
      {
        id_user: userData.user.id,
        name: userData.user.user_metadata.name,
        ubication: "Inventao",
        verified: true,
        picture: userData.user.user_metadata.avatar_url,
        email: userData.user.email,
      },
    ]);
    if (error) {
      console.log(error);
    }
    return data;
  }
  async logOut() {
    const { error } = await supabase.auth.signOut();
    sessionStorage.removeItem("user-data");
    if (error) {
      console.log(error);
    }
    return error;
  }
}
