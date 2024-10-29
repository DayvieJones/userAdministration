import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Sidebar.scss";
import imgLogo from "../../../public/logo_user_administration.png";

// import { DarkModeContext } from "../../Context/darkModeContext";

// const { isDarkMode } = useContext(DarkModeContext);
export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h2>Sidebar</h2> */}
      <div className="sidebar__logo">
        <img src={imgLogo} alt="user administration logo" />
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
