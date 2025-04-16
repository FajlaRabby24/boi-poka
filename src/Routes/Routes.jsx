import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
