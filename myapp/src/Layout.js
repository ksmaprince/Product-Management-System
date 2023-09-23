import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Screens/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/register/Register";
import ProductList from "./pages/product/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);
export default router;
