import "./UserCard.scss";
import myImage from "../../../public/src/assets/bryold_brakkson.jpeg";

export default function UserCard() {
  return (
    <div className="userCard">
      <div className="userCard__actionArea">
        <div className="userCard__media">
          <img src={myImage} alt="profile picture" />
        </div>
        <div className="userCard__content">
          <h3 className="userCard__content__name">Bryold</h3>
          <div className="userCard__content__info-wrapper">
            <p className="info__item">01.01.2001</p>
            <p className="info__item">Test Street blvd</p>
            <p className="info__item">test@street.com</p>
            <p className="info__item">www.test-street.com</p>
            <p className="info__item">+01 23456789</p>
            <p className="info__item">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}
