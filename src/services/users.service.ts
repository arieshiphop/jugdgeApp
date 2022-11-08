import supabase from "../helpers/supabase";

export class UsersService {
  async getUsersData() {
    const actualUserData = await this.getLoggedUserData();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .neq("id_user", actualUserData.user.id);
    console.log(
      "Hemos obtenido los datos de los usuarios que van a ser mostrados",
      data
    );
    if (error) {
      console.log("No hemos obtenido datos de usuarios", error);
    }
    return data;
  }
  async getLoggedUserData() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }
  async getUserByEmail(mail: string) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", mail);
    if (error) {
      console.log(error);
    }
    return data;
  }
  async userExists(userData) {
    const user = await this.getUserByEmail(userData.user.email);
    return user.length > 0 ? true : false;
  }
}
