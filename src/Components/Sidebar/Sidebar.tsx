import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>

      <Link to={"/"}>
        <Button buttonType={"button"} buttonContent="Overview" />
      </Link>
      <Link to={"/createview"}>
        <Button buttonType={"create"} buttonContent="Create User" />
      </Link>
    </div>
  );
}
