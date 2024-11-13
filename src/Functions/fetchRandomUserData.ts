// import { LOCAL_STORAGE_RANDOMUSERDATA } from "./constants";

export async function fetchRandomUserData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(
        `Response to network was not okay. Status: ${response.status}`
      );
    }
    const body = await response.json();

    const randomUser = body.results;
    return randomUser;
  } catch (error) {
    throw error;
  }
}
