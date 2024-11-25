import { useContext } from "react";
import UserForm from "../../Components/UserForm/UserForm";
import { UserContext } from "../../Context/userContext";
import { User } from "../../Types/User";
import "./Createview.scss";
import { useNavigate } from "react-router-dom";

export function Createview() {
  const { usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmitNewUser = (user: User) => {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("User added");
    navigate("/");
  };

  return (
    <UserForm user={undefined} onClick={handleSubmitNewUser} type={"Create"} />
  );
}

export default Createview;
