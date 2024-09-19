import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Createview.scss";

export default function Createview() {
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
                    inputValue=""
                    inputType="text"
                    placeholder="First Name"
                    required={true}
                  />
                  <Input
                    inputValue=""
                    inputType="text"
                    placeholder="Last Name"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="form__section">
              <div className="form__group">
                <div className="group__items">
                  <h3>Birth Date</h3>
                  <Input
                    inputValue=""
                    inputType="date"
                    placeholder="dd-mm-yyyy"
                    required
                    min="1990-01-01"
                    max="2030-12-31"
                  />
                </div>
              </div>
            </div>

            <div className="form__section">
              <div className="section__group">
                <h3>Address</h3>
                <div className="group__input">
                  <input type="text" placeholder="Street Address" required />
                  <input type="text" placeholder="City" required />
                  <input type="text" placeholder="State / Province" />
                  <input type="text" placeholder="Postal / Zip Code" required />
                </div>
              </div>
            </div>

            <div className="form__section">
              <div className="section__group">
                <h3>E-Mail</h3>
                <div className="group__input">
                  <input
                    type="email"
                    placeholder="ex: myname@example.com"
                    required
                  />
                </div>
                <div className="section__group">
                  <h3>Phone Number</h3>
                  <div className="group__input">
                    <input
                      type="tel"
                      placeholder="(+49) 0000-000000"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button value={"Create"} buttonType={"submit"} />
          </form>
        </div>
      </div>
    </>
  );
}
