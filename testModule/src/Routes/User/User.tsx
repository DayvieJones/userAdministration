import axios from "axios";
import { useEffect, useState } from "react";

type RandomUser = {
  email: string;
  name: { first: string; last: string };
  dob: { age: number };
  picture: { large: string; medium: string };
};

function User() {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const { data, status, statusText } = await axios.get<{
        results: RandomUser[];
      }>("https://randomuser.me/api/");
      if (status === 200 && data.results.length > 0) {
        setUser(data.results[0]);
      } else {
        setErrorText(statusText);
        setUser(null);
      }
    } catch (error) {
      console.log(error);
      setErrorText("An error occured");
      setUser(null);
    }
  }

  function displayUser() {
    if (user) {
      return (
        <div>
          <img
            src={user.picture.large}
            alt="User Profile"
            className="usercard-profile-picture"
          />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>Age {user.dob.age}</p>
          <p>{user.email}</p>
        </div>
      );
    } else {
      <p>{errorText}</p>;
    }
  }

  return <>{displayUser()} </>;
}

export default User;

/*
Hiermit wird festgelegt, wie der type von {data} aus dem request fest.
<{results: RandomUser[]}>

Durch den type RandomUser {} wird der type des Users festgelegt, welcher weggespeichert wird.
Basierend auf den Aufbau des Request
*/
