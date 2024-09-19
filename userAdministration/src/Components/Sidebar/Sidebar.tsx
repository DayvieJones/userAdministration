import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>

      <Link to={"/"}>
        <Button buttonType={"button"} value="Overview" />
      </Link>
      <Link to={"/createview"}>
        <Button buttonType={"button"} value="Create User" />
      </Link>
    </div>
  );
}
