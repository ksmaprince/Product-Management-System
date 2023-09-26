import { createBrowserRouter } from "react-router-dom";
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
    path: "/products",
    element: <ProductList />,
  },
]);
export default router;
