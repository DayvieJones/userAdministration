import { useContext, useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Createview.scss";
import getDate from "../../Functions/getDate";
import { User } from "../../Types/User";
import { UserContext } from "../../Context/userContext";
import getNextId from "../../Functions/getNextID";

export function Createview() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    secondName: "",
    birthdate: "",
    streetAdress: "",
    city: "",
    state: "",
    zipCode: "",
    mail: "",
    phoneNumber: "",
  });

  const { usersDispatch } = useContext(UserContext);

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

  function checkInputValue() {
    const inputs = inputValue;

    if (!inputs.firstName) {
      alert("Please enter text in the first name textfield");
      return false;
    }

    if (!inputs.secondName) {
      alert("Please enter text in the second name textfield");
      return false;
    }

    if (!inputs.birthdate) {
      alert("Please choose a date");
      return false;
    }

    if (!inputs.streetAdress) {
      alert("Please enter text in the street address textfield");
      return false;
    }

    if (!inputs.city) {
      alert("Please enter the city in the textfield");
      return false;
    }

    if (!inputs.mail) {
      alert("Please enter your email address");
      return false;
    }

    if (!inputs.phoneNumber) {
      alert("Please enter your phone number");
      return false;
    }

    if (!inputs.state) {
      alert("Please enter text in the state textfield");
      return false;
    }

    if (!inputs.zipCode) {
      alert("Please enter text in the zip code textfield");
      return false;
    }

    return true;
  }

  function clearAllInputs() {
    setInputValue({
      firstName: "",
      secondName: "",
      birthdate: "",
      streetAdress: "",
      city: "",
      state: "",
      zipCode: "",
      mail: "",
      phoneNumber: "",
    });
  }

  const handleInputChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    // Aktualisiere nur das spezifische Feld
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="createview">
        <Sidebar />
        <div className="createview__content">
          <h2 className="createview__title">Createview</h2>
          <form className="createview__form">
            {/* Name Section */}
            <fieldset className="createview__form__section">
              <legend className="createview__form__legend">Name</legend>
              <div className="createview__form__group">
                <div className="createview__form__input">
                  <Input
                    name="firstName"
                    inputValue={inputValue.firstName}
                    inputType="text"
                    placeholder="First Name"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                  <Input
                    name="secondName"
                    inputValue={inputValue.secondName}
                    inputType="text"
                    placeholder="Last Name"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
              </div>
            </fieldset>

            {/* Birth Date Section */}
            <fieldset className="createview__form__section">
              <legend className="createview__form__legend">Birth Date</legend>
              <div className="createview__form__group">
                <div className="createview__form__input">
                  <Input
                    name="birthdate"
                    inputValue={inputValue.birthdate}
                    inputType="date"
                    placeholder="Choose your Birth date"
                    min="1990-01-01"
                    max={getDate()}
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
              </div>
            </fieldset>

            {/* Address Section */}
            <fieldset className="createview__form__section">
              <legend className="createview__form__legend">Address</legend>
              <div className="createview__form__group">
                <div className="createview__form__input">
                  <Input
                    name="streetAdress"
                    inputValue={inputValue.streetAdress}
                    inputType="text"
                    placeholder="Street Address"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                  <Input
                    name="city"
                    inputValue={inputValue.city}
                    inputType="text"
                    placeholder="City"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                  <Input
                    name="state"
                    inputValue={inputValue.state}
                    inputType="text"
                    placeholder="State / Province"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                  <Input
                    name="zipCode"
                    inputValue={inputValue.zipCode}
                    inputType="number"
                    placeholder="Postal / Zip Code"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
              </div>
            </fieldset>

            {/* Contact Information Section */}
            <fieldset className="createview__form__section">
              <legend className="createview__form__legend">
                Contact Information
              </legend>
              <div className="createview__form__group">
                <div className="createview__form__input">
                  <Input
                    name="mail"
                    inputValue={inputValue.mail}
                    inputType="email"
                    placeholder="ex: myname@example.com"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
                <div className="createview__form__input">
                  <Input
                    name="phoneNumber"
                    inputValue={inputValue.phoneNumber}
                    inputType="number"
                    placeholder="(+49) 0000-000000"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
              </div>
            </fieldset>

            {/* Submit Button */}
            <Button
              className="createview__form__button"
              handleSubmitNewUser={handleSubmitNewUser}
              buttonContent={"Create"}
              buttonType={"create"} //prevent default
            />
          </form>
        </div>
      </div>
    </>
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
 * UserCard Bild wird über userAPI gefetched
 *
 * Überprüfung auf Gültigkeit von Inhalt/Email/Nummer
 *
 *
 */
