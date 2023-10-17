import { useRoutes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ProductList from './pages/ProductList/ProductList.jsx';
import Product from "./pages/Product/Product.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Success from "./pages/Success/Success.jsx";
import { useSelector } from "react-redux";

const MainRouter = () => {
  const user = useSelector(state => state.user.currentUser);
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <ProductList />,
        path: '/products/:category',
      },
      {
        element: <Product />,
        path: '/product/:id',
      },
      // { element: <Login />,
      { element: user ? <Home /> : <Login />,
        path: '/login',
      },
      {
        element: user ? <Home /> : <Register />,
        path: '/register',
      },
      {
        element: <Cart />,
        path: '/cart',
      },
      {
        element: <Success />,
        path: '/success',
      }
    ]
  )
}

export default MainRouter;
