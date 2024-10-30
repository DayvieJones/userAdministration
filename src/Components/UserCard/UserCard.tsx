import "./UserCard.scss";
import myImage from "../../../public/bryold_brakkson.jpeg";
import { User } from "../../Types/User";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faEnvelope,
  faUser,
  faAddressBook,
  faCakeCandles,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

// import { DarkModeContext } from "../../Context/darkModeContext";

// const { isDarkMode } = useContext(DarkModeContext);
type UserCardProps = {
  user: User;
  handleOnClick?: any;
};

export default function UserCard({ user, handleOnClick }: UserCardProps) {
  return (
    <div className="userCard">
      <div className="userCard__actionArea">
        <div className="userCard__media">
          <img className="userCard__img" src={myImage} alt="profile picture" />
        </div>
        <div className="userCard__content">
          <h3 className="userCard__content__name">
            <span className="userCard__content__firstName">
              <FontAwesomeIcon icon={faUser} /> {user.firstName}
            </span>
            <span className="userCard__content__secondName">
              {user.secondName}
            </span>
          </h3>
          <div className="userCard__content__info-wrapper">
            <p className="userCard__content__info-item">
              <FontAwesomeIcon icon={faCakeCandles} /> {user.birthdate}
            </p>
            <p className="userCard__content__info-item">
              <FontAwesomeIcon icon={faAddressBook} />
              {user.streetAdress}
            </p>
            <p className="userCard__content__info-item">
              <span>
                <FontAwesomeIcon icon={faCity} /> {user.city} {user.state}{" "}
                {user.zipCode}
              </span>
            </p>
            <p className="userCard__content__info-item">
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> {user.mail}
              </span>
            </p>
            <p className="userCard__content__info-item">
              <span>
                <FontAwesomeIcon icon={faPhone} /> {user.phoneNumber}
              </span>
            </p>
          </div>
        </div>
        <Button
          handleOnClick={handleOnClick}
          buttonContent={"X"}
          buttonType={"delete"}
        />
      </div>
    </div>
  );
}

/*
TODO
DeleteButton hinzufügen entweder als eigene Komponente oder über die Button.tsx
*/
