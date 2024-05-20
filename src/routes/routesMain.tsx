import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Profile } from "../pages/profile"
import { NotFound } from "../pages/404"

export const RoutesMain = () => {
   return(
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
   )
}