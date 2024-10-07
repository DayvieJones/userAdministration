import { createContext } from "react";

export const CLickerContext = createContext<{
  count: number;
  setCount: React.Dispatch<number>;
}>({ count: 0, setCount: () => {} });
