import logo from "../images/logo.svg";
import Button from "./Button";
import Settings from "./Settings";
import useShowCard from "./hooks/useShowCard";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = ({ clearHandler, showClearBtn }) => {
  const { showCard, showCardHandler } = useShowCard();

  return (
    <header className="head">
      {showCard && <Settings showCardHandler={showCardHandler} />}

      <div>
        <Link to="/">
          <img src={logo} alt="logo" width="190" height="52" />
        </Link>
      </div>
      <div className="head-btns">
        {showClearBtn && <Button text="clear" onClick={clearHandler} />}
        <FiSettings className="head-btns-setting" onClick={showCardHandler} />
      </div>
    </header>
  );
};

export default Nav;
