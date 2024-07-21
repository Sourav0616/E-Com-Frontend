import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/index.js";
import { Provider } from "react-redux";
import Regester from "../src/components/Regester.jsx";
import Login from "../src/components/Login.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Homeproducts from "./components/Homeproducts.jsx";
import Catagory from "./components/Catagory.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";
import Notification from "./components/Notification.jsx";
import Nav from "./components/Nav.jsx";
import Reviews from "./components/Reviews.jsx";
import Addproduct from "./components/Addproduct.jsx";
import Productcatagory from "./components/Productcatagory.jsx"
import Indivisualproduct from "./components/Indivisualproduct.jsx"
import Payment from "./components/Payment.jsx"
import Addaress from "./components/Addaress.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Regester /> },
  { path: "/nav", element: <Nav /> },
  { path: "/login", element: <Login /> },
  { path: "/addaress", element: <Addaress /> },
  { path: "/payment/:total", element: <Payment /> },
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "/app/home", element: <Homeproducts /> },
      { path: "/app/catagory", element: <Catagory /> },
      { path: "/app/cart", element: <Cart /> },
      { path: "/app/notification", element: <Notification /> },
      { path: "/app/profile", element: <Profile /> },
      { path: "/app/reviews", element: <Reviews /> },
      { path: "/app/catagoryproducts", element: <Productcatagory /> },
      { path: "/app/indivisualproduct", element: <Indivisualproduct /> },
      { path: "/app/indivisualproduct", element: <Indivisualproduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
