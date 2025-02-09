import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AppLayout from "../App";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Payment from "../pages/Payment";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <Menu />
      },
      {
        path: '/payment-details',
        element: <Payment />
      }
    ],
  },
]);

