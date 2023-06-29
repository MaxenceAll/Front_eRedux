import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { STYLEDContainer, STYLEDContainerBox } from "../Styles/genericContainer";
import Loader from "../Components/Tools/Loader";

export default function PrivateRoutes({ children, ...rest }) {

  const [auth, setAuth] = useState(true);

  if (!auth) {
    toast.warning("Il faut être identifié pour accèder à cette page !");
    return <Navigate key="login" to="/login" />;
  }
  return <Outlet />;
}