import React from "react";
import classes from "./styles/CardPopup.module.css";
import Close from "./Close";
import { IoIosAddCircleOutline } from "react-icons/io";

const KeylistPopup = ({ showCardHandler }) => {
  return (
    <div className={`${classes["keylist-container"]}`}>
      <div className={`${classes["keylist-header"]}`}>
        <Close showCardHandler={showCardHandler} />
        <p>Tags</p>
      </div>
      <div className={`${classes["keylist-options"]}`}>
        <ul className={`${classes["keylist-options-list"]}`}>
          <li>
            <p style={{ color: "#2567B5" }}>Temperature</p>
            <IoIosAddCircleOutline className="icon-group-styling keylist-icons" />
          </li>
          <li>
            <p style={{ color: "#7ACC5D" }}>Location</p>
            <IoIosAddCircleOutline className="icon-group-styling keylist-icons" />
          </li>
          <li>
            <p style={{ color: "#FFA800" }}>Neighbor</p>
            <IoIosAddCircleOutline className="icon-group-styling keylist-icons" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeylistPopup;
