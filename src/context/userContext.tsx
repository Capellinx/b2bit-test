import { createContext, ReactNode, useState } from "react";
import { IProfile, IUserContext, IUserInformation } from "../interfaces/user";
import { userService } from "../services/user";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const navigate = useNavigate()
   const [profile, setProfile] = useState<IProfile[]>([])
   
   const loginUser = async ({ email, password }: IUserInformation) => {
      const { user } = await userService.login({ email, password })
      if (user) {
         const { email, name, avatar } = user

         const newSchemaProfile: IProfile = {
            email,
            name,
            avatar
         }

         setProfile([newSchemaProfile])
         navigate("/profile")
      }
   }

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

