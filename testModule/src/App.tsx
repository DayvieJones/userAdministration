import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoMatch from "./Routes/Error/NoMatch";
import ErrorPage from "./Routes/Error/ErrorPage";
import Index from "./Routes/Index/Index";
import User from "./Routes/User/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Index /> },
        { path: "*", element: <NoMatch /> },
        { path: "user", element: <User /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
