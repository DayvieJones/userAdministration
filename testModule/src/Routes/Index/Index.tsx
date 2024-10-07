import { Link } from "react-router-dom";
import Button from "../../Components/button/Button";

function Index() {
  return (
    <>
      <p>Hello there!</p>
      <br />
      <Link to="/user">
        <Button value="Click me" />
      </Link>
    </>
  );
}

export default Index;
