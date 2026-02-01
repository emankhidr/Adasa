import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/blog-details/:id",
          element: <BlogDetails />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
