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
    navigate(-1);
  };

  return (
    <UserForm user={undefined} onClick={handleSubmitNewUser} type={"Create"} />
  );
}

export default Createview;

/* **** TODO     ****
 *
 *
 * Local Storage Vorbereiten X
 * UserCard in LocalStorage speichern X
 * UserCard von localstorage laden und displayen X
 *
 * **** Gedanken ****
 * Nach drücken von create -> Profil Karte mit den Daten befüllen X
 *
 * Loaddata to UserCard X
 * UserCard Bild wird über userAPI gefetched X
 * UserCard Bild in user speichern
 * Überprüfung auf Gültigkeit von Inhalt/Email/Nummer
 *
 *
 */
