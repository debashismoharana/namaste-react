import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Error from "./src/components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/**
  Writing JSX with functional components
  const Title = () => <div>Namaste React</div>;
  const Heading = () => (
    <h1 className="heading">
      <Title />
      This is a JSX heading!
    </h1>
    );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Heading />);
 */

/**
 * Creating react objects without JSX using createElement
 
  const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "d1c1" }, "This is Child 1"),
      React.createElement("h2", { id: "d1c2" }, "This is Child 1"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "d2c1" }, "This is Child 2"),
      React.createElement("h2", { id: "d2c2" }, "This is Child 2"),
    ]),
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);
*/
