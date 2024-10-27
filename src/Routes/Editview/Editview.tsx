import { useContext, useEffect, useState } from "react";
import UserForm from "../../Components/UserForm/UserForm";
import { UserContext } from "../../Context/userContext";
import { User } from "../../Types/User";
import { useParams } from "react-router-dom";

export default function Editview() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users, usersDispatch } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => String(user.id) === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("User updated");
  }

  function displayUserForm() {
    if (editUser) {
      return (
        <div>
          <UserForm user={editUser} onClick={updateUser} />
        </div>
      );
    } else {
      return "User not found!";
    }
  }

  return displayUserForm();
}
