import "./UserCard.scss";
import "../../Styles/MediaQuerys.scss";
import myImage from "../../../public/bryold_brakkson.jpeg";
import { User } from "../../Types/User";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faAddressBook,
  faCakeCandles,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { fetchRandomUserData } from "../../Functions/fetchRandomUserData";
import { useEffect, useState } from "react";

type UserCardProps = {
  user: User;
  handleOnClick?: any;
};

export default function UserCard({ user, handleOnClick }: UserCardProps) {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const getRandomPicture = async () => {
      try {
        const result = await fetchRandomUserData();
        setImgSrc(result[0].picture.large);
      } catch (error) {
        console.error("Error fetching random user picture:", error);
      }
    };
    getRandomPicture();
  }, []);

  return (
    <div className="userCard">
      <div className="userCard__actionArea">
        <div className="userCard__media">
          <img
            className="userCard__img"
            src={imgSrc || myImage}
            alt="profile picture"
          />
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
            <span className="userCard__content__info-item">
              <FontAwesomeIcon icon={faCakeCandles} />
              {user.birthdate}
            </span>
            <span className="userCard__content__info-item">
              <FontAwesomeIcon icon={faAddressBook} />
              {user.streetAdress}
            </span>
            <span className="userCard__content__info-item">
              <FontAwesomeIcon icon={faCity} /> {user.city} {user.state}{" "}
              {user.zipCode}
            </span>
            <span className="userCard__content__info-item">
              <FontAwesomeIcon icon={faEnvelope} /> {user.mail}
            </span>
            <span className="userCard__content__info-item">
              <FontAwesomeIcon icon={faPhone} /> {user.phoneNumber}
            </span>
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
