import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h2>Sidebar</h2> */}
      <div className="sidebar__logo">
        <img
          src="src\Assets\logo_user_administration.png"
          alt="user administration logo"
        />
      </div>
      <div className="sidebar__buttons">
        <Link to={"/"}>
          <Button buttonType={"button"} buttonContent="Overview" />
        </Link>
        <Link to={"/createview"}>
          <Button buttonType={"create"} buttonContent="Create User" />
        </Link>
      </div>
    </div>
  );
}
