import { createContext, ReactNode, useEffect, useState } from "react";
import { IProfile, IUserContext, IUserInformation } from "../interfaces/user";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const navigate = useNavigate()
   const [profile, setProfile] = useState<IProfile[]| null>(null)

   const loginUser = async ({ email, password }: IUserInformation) => {
      try {
         const { data } = await apiUrl.post("/auth/login/", { email, password })
         const { user, tokens } = data
         localStorage.setItem("token_b2bit", JSON.stringify(tokens.access));
         const newSchemaProfile: IProfile = {
            email: user.email,
            name: user.name,
            avatar: user.avatar
         }
         setProfile([newSchemaProfile])
         navigate("/profile")
         toast.success("Login com sucesso")
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      const loadUser = async () => {
         const token = localStorage.getItem("token_b2bit")
         if (token) {
            try {
               const { data } = await apiUrl.get("/auth/profile")
               const { email, name, avatar } = data

               const newSchemaProfile: IProfile = {
                  email,
                  name,
                  avatar
               }
               setProfile([newSchemaProfile])
               navigate("/profile")
            } catch (error) {
               console.log(error);
            }
         }
      }
      loadUser()
   }, [])

   const logoutUser = () => {
      localStorage.clear()
      setProfile([])
      navigate("/")
   }

   return (
      <UserContext.Provider value={{
         loginUser,
         profile,
         logoutUser
      }}>
         {children}
      </UserContext.Provider>
   )
}

