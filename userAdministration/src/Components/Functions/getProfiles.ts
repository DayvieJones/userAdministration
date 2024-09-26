import { LOCAL_STORAGE_PROFILES } from "./constants";

export default function getProfiles() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROFILES) || "[]");
}

export { getProfiles };
