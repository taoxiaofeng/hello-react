import App from "./App";
import React from "react";
import About from "./components/ReactRouterDemo/About";
import Home from "./components/ReactRouterDemo/Home";
import PageA from "./views/pageA";
import PageB from "./views/pageB";

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
  {
    path: "pageA",
    element: <PageA />,
  },
  {
    path: "pageB",
    element: <PageB />,
  },
]);

export default router;