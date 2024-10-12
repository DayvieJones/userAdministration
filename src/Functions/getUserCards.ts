import { LOCAL_STORAGE_PROFILES } from "./constants";

export default function getUserCards() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROFILES) || "[]");
}

export { getUserCards };
