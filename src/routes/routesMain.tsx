import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Profile } from "../pages/profile"
import { NotFound } from "../pages/404"
import { ProtectedRoutes } from "../components/protectedRoutes"

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/profile" element={<ProtectedRoutes />}>
            <Route index element={<Profile />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}