import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../../hooks/useLoginContext";

export const ProtectedRoutes = () => {
   const { profile } = useLogin();

   return profile ? <Outlet /> : <Navigate to="/" />
};
