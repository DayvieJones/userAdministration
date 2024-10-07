import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Createview.scss";
import saveProfiles from "../../Components/Functions/saveProfiles";
import getDate from "../../Components/Functions/getDate";
import { userProfiles } from "../../Components/Functions/constants";

export function Createview() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    secondName: "",
    date: "",
    streetAdress: "",
    city: "",
    state: "",
    zipCode: "",
    mail: "",
    phoneNumber: "",
  });

  const handleOnClickEvent = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!checkInputValue()) return;
    userProfiles.push(inputValue);
    console.log(userProfiles);

    saveProfiles(userProfiles);
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

    if (!inputs.date) {
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
          <h2>Createview</h2>
          <form className="createview__form">
            <div className="form__section">
              <div className="section__group">
                <h3>Name</h3>
                <div className="group__input">
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
            </div>

            <div className="form__section">
              <div className="form__group">
                <div className="group__items">
                  <h3>Birth Date</h3>
                  <Input
                    name="date"
                    inputValue={inputValue.date}
                    inputType="date"
                    placeholder="chose your Birth date"
                    min="1990-01-01"
                    max={getDate()}
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
              </div>
            </div>

            <div className="form__section">
              <div className="section__group">
                <h3>Address</h3>
                <div className="group__input">
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
            </div>

            <div className="form__section">
              <div className="section__group">
                <h3>E-Mail</h3>
                <div className="group__input">
                  <Input
                    name="mail"
                    inputValue={inputValue.mail}
                    inputType="email"
                    placeholder="ex: myname@example.com"
                    handleInputChangeEvent={handleInputChangeEvent}
                  />
                </div>
                <div className="section__group">
                  <h3>Phone Number</h3>
                  <div className="group__input">
                    <Input
                      name="phoneNumber"
                      inputValue={inputValue.phoneNumber}
                      inputType="number"
                      placeholder="(+49) 0000-000000"
                      handleInputChangeEvent={handleInputChangeEvent}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              handleOnClickEvent={handleOnClickEvent}
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
 * Local Storage Vorbereiten
 * UserCard in LocalStorage speichern
 * UserCard von localstorage laden und displayen
 *
 * **** Gedanken ****
 * Nach drücken von create -> Profil Karte mit den Daten befüllen
 *
 * Loaddata to UserCard
 * UserCard Bild wird über userAPI gefetched
 *
 * Überprüfung auf Gültigkeit von Inhalt/Email/Nummer
 *
 *
 */
