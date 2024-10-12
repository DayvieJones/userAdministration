import "./UserCard.scss";
import myImage from "../../../public/src/assets/bryold_brakkson.jpeg";
import { User } from "../../Types/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="userCard">
      <div className="userCard__actionArea">
        <div className="userCard__media">
          <img className="userCard_img" src={myImage} alt="profile picture" />
        </div>
        <div className="userCard__content">
          <h3 className="userCard__content__name">
            {user.firstName}
            {user.secondName}
          </h3>
          <div className="userCard__content__info-wrapper">
            <p className="info__item">{user.birthdate}</p>
            <p className="info__item">{user.streetAdress}</p>
            <p className="info__item">{user.city}</p>
            <p className="info__item">{user.state}</p>
            <p className="info__item">{user.zipCode}</p>
            <p className="info__item">{user.mail}</p>
            <p className="info__item">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
