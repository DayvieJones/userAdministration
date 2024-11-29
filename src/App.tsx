import "./App.scss";
import "./Styles/MediaQuerys.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Routes/Error/ErrorPage";
import NoMatch from "./Routes/Error/NoMatch";
import Mainview from "./Routes/Mainview/Mainview";
import Editview from "./Routes/Editview/Editview";
import Createview from "./Routes/Createview/Createview";
import { useEffect, useReducer, useState } from "react";
import userManagementReducer from "./Hooks/userManagementReducer";
import { UserContext } from "./Context/userContext";
import { User } from "./Types/User";
import {
  LOCAL_STORAGE_PROFILES,
  LOCAL_STORAGE_THEME,
} from "./Functions/constants";
import { DarkModeContext } from "./Context/DarkModeContext";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Mainview /> },
          { path: "createview", element: <Createview /> },
          { path: "editview/:id", element: <Editview /> },
          { path: "*", element: <NoMatch /> },
        ],
      },
    ],
    { basename: "/userAdministration/" }
  );

  const [isDarkMode, setDarkMode] = useState(true);
  const [users, usersDispatch] = useReducer(
    userManagementReducer,
    [],
    fetchInitUserData
  );

  useEffect(() => {
    const stringTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
    if (stringTheme) {
      setDarkMode(JSON.parse(stringTheme));
    }
  }, []);

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem(LOCAL_STORAGE_PROFILES);
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }
    return [];
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <div className={isDarkMode ? "dark" : "light"}>
        <UserContext.Provider value={{ users, usersDispatch }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
