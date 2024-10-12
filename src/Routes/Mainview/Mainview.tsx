import Sidebar from "../../Components/Sidebar/Sidebar";
import UserCard from "../../Components/UserCard/UserCard";
import "./Mainview.scss";
import {} from "../Createview/Createview";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

function Mainview() {
  const { users } = useContext(UserContext);

  return (
    <>
      <div className="index">
        <Sidebar />
        <div className="index__mainView">
          <h2>Mainview</h2>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mainview;
