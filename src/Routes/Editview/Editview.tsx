import { useContext, useEffect, useState } from "react";
import UserForm from "../../Components/UserForm/UserForm";
import { UserContext } from "../../Context/userContext";
import "./Editview.scss";
import { User } from "../../Types/User";
import { useParams } from "react-router-dom";

export default function Editview() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => String(user.id) === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  return (
    <div>
      <UserForm user={editUser} onClick={() => {}} />
    </div>
  );
}
