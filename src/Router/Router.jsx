import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Blog from "../Components/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import AllProducts from "../Components/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AllProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SingUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/Cart",
        element: <Cart></Cart>,
      },
      {
        path: "/Admin",
        element: <AdminPanel></AdminPanel>
      },
      {
        path: "/SingleProduct/:productId",
        element: <SingleProduct></SingleProduct>
      },
    ],
  },
]);

export default Router;
