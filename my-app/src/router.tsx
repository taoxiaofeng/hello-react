import App from "./App";
import React from "react";
import About from "./components/ReactRouterDemo/About";
import Home from "./components/ReactRouterDemo/Home";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

export default router;