import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ErrorPage from "./Routes/Error/ErrorPage";
import NoMatch from "./Routes/Error/NoMatch";
import Mainview from "./Routes/Mainview/Mainview";
import Editview from "./Routes/Editview/Editview";
import Createview from "./Routes/Createview/Createview";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
          { path: "", element: <Mainview /> },
          { path: "/editview", element: <Editview /> },
          { path: "/createview", element: <Createview /> },
          { path: "*", element: <NoMatch /> },
        ],
      },
    ],
    { basename: "/userAdministration" }
  );
  return <RouterProvider router={router} />;
}

export default App;
