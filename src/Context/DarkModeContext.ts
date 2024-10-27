import { createContext } from "react";

export const DarkModeContext = createContext<{
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<boolean>;
}>({ isDarkMode: false, setDarkMode: () => {} });
