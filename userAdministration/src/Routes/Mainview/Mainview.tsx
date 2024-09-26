import Sidebar from "../../Components/Sidebar/Sidebar";
import UserCard from "../../Components/UserCard/UserCard";
import "./Mainview.scss";
import {} from "../Createview/Createview";
import getProfiles from "../../Components/Functions/getProfiles";

function Mainview() {
  const test = getProfiles();
  console.log(test);

  return (
    <>
      <div className="index">
        <Sidebar />
        <div className="index__mainView">
          <h2>Mainview</h2>
          <UserCard />
          <UserCard />
        </div>
      </div>
    </>
  );
}

export default Mainview;
