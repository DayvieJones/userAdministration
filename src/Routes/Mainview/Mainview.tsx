import Sidebar from "../../Components/Sidebar/Sidebar";
import UserCard from "../../Components/UserCard/UserCard";
import "./Mainview.scss";
import {} from "../Createview/Createview";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { User } from "../../Types/User";
function Mainview() {
  const { users, usersDispatch } = useContext(UserContext);

  const handleDeleteButton = (user: User) => {
    usersDispatch({ type: "REMOVE_USER", user });
  };

  return (
    <>
      <div className="index">
        <Sidebar />
        <div className="index__mainview">
          <h2>Mainview</h2>
          <div className="index__mainview__userCards">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                handleOnClick={() => handleDeleteButton(user)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainview;
