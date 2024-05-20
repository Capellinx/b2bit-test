import { createContext, ReactNode, useState } from "react";
import { IUserContext, IUserInformation } from "../interfaces/user";
import { userService } from "../services/user";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext)


export const UserProvider = ({ children }: { children: ReactNode }) => {
   const navigate = useNavigate()

   const loginUser = async ({ email, password }: IUserInformation) => {
      const response = await userService.login({ email, password })
      if (response) {
         navigate("/profile")
      }
   }

   return (
      <UserContext.Provider value={{
         loginUser
      }}>
         {children}
      </UserContext.Provider>
   )
}

