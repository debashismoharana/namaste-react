import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/restaurants/:id",
      element: <RestaurantDetails />,
    },
  ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
