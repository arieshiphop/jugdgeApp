import supabase from "../helpers/supabase";

export class UsersService {
  async getUsersData() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.log(error);
    }
    return data;
  }
  async getLoggedUserData() {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log(error);
    }
    console.log(data);
    return data;
  }
}
