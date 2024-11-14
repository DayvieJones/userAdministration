import {
  LOCAL_STORAGE_PROFILES,
  LOCAL_STORAGE_RANDOMUSERDATA,
} from "./constants";

export default function saveToLocalStorage(
  userProfiles: {}[],
  userPictures: {}
) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PROFILES, JSON.stringify(userProfiles));
    localStorage.setItem(
      LOCAL_STORAGE_RANDOMUSERDATA,
      JSON.stringify(userPictures)
    );
  } catch (error) {
    alert("Alarm with Local Storage!");
  }
  return;
}
export { saveToLocalStorage };
