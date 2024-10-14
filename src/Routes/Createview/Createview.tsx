import UserForm from "../../Components/UserForm/UserForm";
import "./Createview.scss";

export function Createview() {
  const handleSubmitNewUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!checkInputValue()) return;

    const user: User = {
      id: getNextId(),
      firstName: inputValue.firstName,
      secondName: inputValue.secondName,
      birthdate: inputValue.birthdate,
      streetAdress: inputValue.streetAdress,
      city: inputValue.city,
      state: inputValue.state,
      zipCode: inputValue.zipCode,
      mail: inputValue.mail,
      phoneNumber: inputValue.phoneNumber,
    };

    usersDispatch({ type: "ADD_USER", user: user });
    alert("User added");
    clearAllInputs();
  };
  return <UserForm user={null} onClick={handleSubmitNewUser} />;
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
 * UserCard Bild wird über userAPI gefetched
 *
 * Überprüfung auf Gültigkeit von Inhalt/Email/Nummer
 *
 *
 */
