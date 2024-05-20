import { Route, Routes } from "react-router-dom"
import { LoginForm } from "../components/forms/loginForm"




export const RoutesMain = () => {
   return(
      <Routes>
         <Route path="/" element={<LoginForm/>}/>
      </Routes>
   )
}