import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";

export default function PrivateRoutes({ children, ...rest }) {

  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    toast.warning("Il faut être identifié pour accèder à cette page !");
    return <Navigate key="login" to="/login" />;
  }
  return <Outlet />;
}