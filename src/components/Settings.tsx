import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Toggle from "./Toggle";

const Settings = ({ closeHandler }) => {
  const checkHandler = (e) => {
    const target = e.target;
    console.dir(target);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <div className="settings-close">
          <AiOutlineClose style={{ color: "white" }} onClick={closeHandler} />
        </div>
        <ul className="settings-header-label">
          <li>Options</li>
          <li>Enable</li>
        </ul>
      </div>
      <div className="settings-options">
        <ul className="settings-options-list">
          <li>
            <p>Keyword Tags</p>
            <Toggle id="c1" checkHandler={checkHandler} />
          </li>
          <li>
            <p>Location</p>
            <Toggle id="c2" checkHandler={checkHandler} />
          </li>
          <li>
            <p>Voice</p>
            <Toggle id="c3" checkHandler={checkHandler} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
