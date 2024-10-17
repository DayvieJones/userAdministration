import "./UserCard.scss";
import myImage from "../../../public/src/assets/bryold_brakkson.jpeg";
import { User } from "../../Types/User";
import DeleteButton from "../DeleteButton/DeleteButton";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="userCard">
      {/* <DeleteButton handleDelete={() => {}} className="DeleteButton" /> */}

      <div className="userCard__actionArea">
        <div className="userCard__media">
          <img className="userCard__img" src={myImage} alt="profile picture" />
        </div>
        <div className="userCard__content">
          <h3 className="userCard__content__name">
            <span className="userCard__content__firstName">
              {user.firstName}
            </span>
            <span className="userCard__content__secondName">
              {user.secondName}
            </span>
          </h3>
          <div className="userCard__content__info-wrapper">
            <p className="userCard__content__info-item">{user.birthdate}</p>
            <p className="userCard__content__info-item">{user.streetAdress}</p>
            <p className="userCard__content__info-item">
              {user.city} {user.state}
            </p>
            <p className="userCard__content__info-item">{user.zipCode}</p>
            <p className="userCard__content__info-item">{user.mail}</p>
            <p className="userCard__content__info-item">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
TODO
DeleteButton hinzufügen entweder als eigene Komponente oder über die Button.tsx
*/
