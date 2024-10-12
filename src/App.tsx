import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ErrorPage from "./Routes/Error/ErrorPage";
import NoMatch from "./Routes/Error/NoMatch";
import Mainview from "./Routes/Mainview/Mainview";
import Editview from "./Routes/Editview/Editview";
import Createview from "./Routes/Createview/Createview";
import { useReducer } from "react";
import userManagementReducer from "./Hooks/userManagementReducer";
import { UserContext } from "./Context/userContext";
import { User } from "./Types/User";
import { LOCAL_STORAGE_PROFILES } from "./Functions/constants";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
          { path: "", element: <Mainview /> },
          { path: "/createview", element: <Createview /> },
          { path: "/editview/:id", element: <Editview /> },
          { path: "*", element: <NoMatch /> },
        ],
      },
    ],
    { basename: "/userAdministration" }
  );
  const [users, usersDispatch] = useReducer(
    userManagementReducer,
    [],
    fetchInitUserData
  );

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem(LOCAL_STORAGE_PROFILES);
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }
    return [];
  }

  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
