import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Sidebar.scss";
import imgLogo from "../../../public/logo_user_administration.png";

import { useContext } from "react";
import { Switch } from "../Switch/Switch";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function Sidebar() {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <Switch
        handleOnChangeEvent={() => {
          setDarkMode(!isDarkMode);
        }}
      />
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
