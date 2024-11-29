import { LOCAL_STORAGE_PROFILES, LOCAL_STORAGE_THEME } from "./constants";

export function saveProfilesToLocalStorage(userProfiles: {}[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PROFILES, JSON.stringify(userProfiles));
  } catch (error) {
    alert("Alarm with Local Storage!");
  }
  return;
}

export function saveThemeToLocalStorage(newTheme: boolean) {
  try {
    localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(newTheme));
  } catch (error) {
    alert("Alarm with Local Storage!");
  }
  return;
}
