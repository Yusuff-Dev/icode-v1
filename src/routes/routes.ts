import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home";
import NotFound from "../components/NotFound";
import Services from "../components/pages/Services";
import Works from "../components/pages/Works";
import Blogs from "../components/pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "works", Component: Works },
      { path: "blogs", Component: Blogs },
    ],
  },

  { path: "*", Component: NotFound },
]);
