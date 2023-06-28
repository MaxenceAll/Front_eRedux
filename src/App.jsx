import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Error from "./Components/Error";
import Home from "./Pages/Home";
import NotFound from "./Components/Notfound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProductDetails from "./Components/Home/ProductDetails";
import usePageTitle from "./Hooks/usePageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="produit/:id" element={<ProductDetails />}/>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  usePageTitle(`E-Redux | Bienvenue !`);
  return (
    <>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
