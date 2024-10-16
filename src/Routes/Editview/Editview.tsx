import { useContext, useState } from "react";
import UserForm from "../../Components/UserForm/UserForm";
import { UserContext } from "../../Context/userContext";
import "./Editview.scss";
import { User } from "../../Types/User";

export default function Editview() {
  const [user, setUser] = useState<>(null);
  const { users } = useContext(UserContext);

  const handleUpdateUser = (user: User) => {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("User updated");
  };
  return (
    <div>
      <UserForm user={null} onClick={handleUpdateUser} />
    </div>
  );
}
