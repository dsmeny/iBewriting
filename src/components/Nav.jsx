import logo from "../images/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = ({ clickHandler, showClearBtn }) => {
  return (
    <header className="head">
      <div>
        <Link className="nav" to="/">
          <img src={logo} alt="logo" width="190" height="52" />
        </Link>
      </div>
      {showClearBtn && (
        <div>
          <Button text="clear" onClick={clickHandler} />
        </div>
      )}
    </header>
  );
};

export default Nav;
