import { useState } from "react";
import getDate from "../../Functions/getDate";
import Sidebar from "../Sidebar/Sidebar";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { User } from "../../Types/User";
import getNextId from "../../Functions/getNextID";

type UserFormProps = {
  user: User | undefined;
  onClick: (user: User) => void;
};

function UserForm({ user, onClick }: UserFormProps) {
  console.log(user);

  const [inputValue, setInputValue] = useState({
    firstName: user?.firstName ?? "",
    secondName: user?.secondName ?? "",
    birthdate: user?.birthdate ?? "",
    streetAdress: user?.streetAdress ?? "",
    city: user?.city ?? "",
    state: user?.state ?? "",
    zipCode: user?.zipCode ?? "",
    mail: user?.mail ?? "",
    phoneNumber: user?.phoneNumber ?? "",
  });

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

  function handleSubmitUser(event: { preventDefault: () => void }) {
    if (checkInputValue()) {
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
      onClick(user);
      clearAllInputs();
    } else {
      event.preventDefault();
      alert("Pleas fullfill the information");
    }
  }
  return (
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
            handleSubmitNewUser={handleSubmitUser}
            buttonContent={"Create"}
            buttonType={"create"}
          />
        </form>
      </div>
    </div>
  );
}

export default UserForm;
