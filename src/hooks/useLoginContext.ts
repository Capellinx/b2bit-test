import { useContext } from "react"
import { UserContext } from "../context/userContext"


export const useLogin = () => {
   const userContext = useContext(UserContext)

   if (!userContext) {
      throw new Error("useLogin must be used within a LoginProvider");
   }

   return userContext
}