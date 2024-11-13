import { LOCAL_STORAGE_PROFILES } from "./constants";

export default function saveToLocalStorage(userProfiles: {}[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PROFILES, JSON.stringify(userProfiles));
  } catch (error) {
    alert("Alarm with Local Storage!");
  }
  return;
}

export { saveToLocalStorage };
