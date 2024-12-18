import Sidebar from "../../Components/Sidebar/Sidebar";
import UserCard from "../../Components/UserCard/UserCard";
import "./Mainview.scss";
import {} from "../Createview/Createview";
import { MouseEvent, useContext } from "react";
import { User } from "../../Types/User";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

function Mainview() {
  const { users, usersDispatch } = useContext(UserContext);

  const handleDeleteButton = (
    user: User,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    usersDispatch({ type: "REMOVE_USER", user });
  };

  return (
    <>
      <div className="index">
        <Sidebar />
        <div className="index__mainview">
          {/* <h2>Mainview</h2> */}
          <div className="index__mainview__userCards">
            {users.map((user) => (
              <Link to={`/editview/${user.id}`} key={`usercardlink-${user.id}`}>
                <UserCard
                  key={`usercardlink-${user.id}`}
                  user={user}
                  handleOnClick={(
                    event: MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleDeleteButton(user, event)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainview;
