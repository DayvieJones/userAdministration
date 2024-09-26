import { LOCAL_STORAGE_PROFILES } from "./constants";

export default function saveProfiles(userProfiles: {}[]) {
  return localStorage.setItem(
    LOCAL_STORAGE_PROFILES,
    JSON.stringify(userProfiles)
  );
}

export { saveProfiles };
