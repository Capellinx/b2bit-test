import { IUserInformation } from "../interfaces/user"
import { apiUrl } from "./api"

export const userService = {
   login: async ({ email, password }: IUserInformation) => {
      try {
         const { data } = await apiUrl.post("/auth/login/", { email, password });
         localStorage.setItem("token_b2bit", JSON.stringify(data.tokens.access));
         return data
      } catch (error) {
         console.log(error);
      }
   }
}